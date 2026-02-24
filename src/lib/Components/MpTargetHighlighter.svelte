<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	/* ---------------- types ---------------- */

	type MixpanelTarget = {
		$tag_name?: string;
		$classes?: string[];
		$nth_child?: number;
		$nth_of_type?: number;
		[k: string]: any;
	};

	type MixpanelElementPathEntry = {
		$tag_name?: string;
		$classes?: string[];
		$nth_child?: number;
		$nth_of_type?: number;
		[k: string]: any;
	};

	type Candidate = {
		el: Element;
		score: number;
	};

	/* ---------------- state ---------------- */

	let inputText = '';
	let candidates: Candidate[] = [];
	let selectedIndex = 0;
	let status = '';

	let overlayBox: HTMLDivElement | null = null;
	let overlayLabel: HTMLDivElement | null = null;

	/* ---------------- utils ---------------- */

	function cx(...parts: Array<string | false | null | undefined>) {
		return parts.filter(Boolean).join(' ');
	}

	function safeParse(text: string): any | null {
		try {
			return JSON.parse(text);
		} catch {
			return null;
		}
	}

	function normalizeClasses(v: unknown): string[] {
		return (Array.isArray(v) ? v : [])
			.map(String)
			.map((c) => c.trim())
			.filter(Boolean);
	}

	function getDomPath(el: Element): string {
		const parts: string[] = [];
		let cur: Element | null = el;

		while (cur && cur !== document.documentElement) {
			const tag = cur.tagName.toLowerCase();
			const id = (cur as HTMLElement).id ? `#${(cur as HTMLElement).id}` : '';
			const cls = (cur as HTMLElement).classList?.length
				? '.' +
					Array.from((cur as HTMLElement).classList)
						.slice(0, 2)
						.join('.')
				: '';
			parts.unshift(`${tag}${id}${cls}`);
			cur = cur.parentElement;
		}

		return parts.join(' > ');
	}

	/* ---------------- matching logic ---------------- */

	function scoreElement(el: Element, target: MixpanelTarget): number {
		let score = 0;

		if (target.$tag_name && el.tagName.toLowerCase() === target.$tag_name.toLowerCase()) {
			score += 10;
		}

		const wantClasses = normalizeClasses(target.$classes);
		const elClasses = new Set(Array.from((el as HTMLElement).classList ?? []));

		for (const c of wantClasses) {
			if (elClasses.has(c)) score += 1;
		}

		if (typeof target.$nth_child === 'number' && el.parentElement) {
			const idx = Array.from(el.parentElement.children).indexOf(el) + 1;
			if (idx === target.$nth_child) score += 5;
		}

		if (typeof target.$nth_of_type === 'number' && el.parentElement) {
			const same = Array.from(el.parentElement.children).filter((n) => n.tagName === el.tagName);
			const idx = same.indexOf(el) + 1;
			if (idx === target.$nth_of_type) score += 5;
		}

		return score;
	}

	function findCandidatesFromTarget(target: MixpanelTarget): Candidate[] {
		if (!browser) return [];

		const tag = target.$tag_name?.toLowerCase();
		const wantClasses = normalizeClasses(target.$classes);

		const all = Array.from(tag ? document.querySelectorAll(tag) : document.querySelectorAll('*'));

		let filtered = all;

		if (wantClasses.length) {
			filtered = all.filter((el) =>
				wantClasses.every((c) => (el as HTMLElement).classList?.contains(c))
			);
		}

		if (wantClasses.length && filtered.length === 0) {
			filtered = all.filter((el) =>
				wantClasses.some((c) => (el as HTMLElement).classList?.contains(c))
			);
		}

		return filtered
			.map((el) => ({ el, score: scoreElement(el, target) }))
			.sort((a, b) => b.score - a.score)
			.slice(0, 40);
	}

	function matchesNode(el: Element, want: MixpanelElementPathEntry): boolean {
		if (want.$tag_name && el.tagName.toLowerCase() !== want.$tag_name.toLowerCase()) return false;

		const wantClasses = normalizeClasses(want.$classes);
		if (wantClasses.length) {
			for (const c of wantClasses) {
				if (!(el as HTMLElement).classList?.contains(c)) return false;
			}
		}

		return true;
	}

	function findUsingElementsPath(path: MixpanelElementPathEntry[]): Element[] {
		if (!browser) return [];

		const clean = path.filter((p) => p?.$tag_name);
		if (!clean.length) return [];

		const first = clean[0];
		const roots = findCandidatesFromTarget(first).map((c) => c.el);

		const matches: Element[] = [];

		for (const el of roots) {
			let cur: Element | null = el;
			let ok = true;

			for (let i = 1; i < clean.length; i++) {
				let p = cur?.parentElement;
				let found: Element | null = null;

				while (p && p !== document.documentElement) {
					if (matchesNode(p, clean[i])) {
						found = p;
						break;
					}
					p = p.parentElement;
				}

				if (!found) {
					ok = false;
					break;
				}

				cur = found;
			}

			if (ok) matches.push(el);
		}

		return matches;
	}

	/* ---------------- overlay ---------------- */

	function ensureOverlay() {
		if (!browser || overlayBox) return;

		overlayBox = document.createElement('div');
		overlayBox.style.position = 'fixed';
		overlayBox.style.border = '3px solid rgba(255,0,0,.9)';
		overlayBox.style.background = 'rgba(255,0,0,.08)';
		overlayBox.style.borderRadius = '12px';
		overlayBox.style.pointerEvents = 'none';
		overlayBox.style.zIndex = '2147483647';
		overlayBox.style.display = 'none';

		overlayLabel = document.createElement('div');
		overlayLabel.style.position = 'fixed';
		overlayLabel.style.padding = '6px 8px';
		overlayLabel.style.font = '12px system-ui';
		overlayLabel.style.background = 'rgba(0,0,0,.85)';
		overlayLabel.style.color = 'white';
		overlayLabel.style.borderRadius = '8px';
		overlayLabel.style.pointerEvents = 'none';
		overlayLabel.style.zIndex = '2147483647';
		overlayLabel.style.display = 'none';

		document.body.appendChild(overlayBox);
		document.body.appendChild(overlayLabel);
	}

	function clearHighlight() {
		overlayBox && (overlayBox.style.display = 'none');
		overlayLabel && (overlayLabel.style.display = 'none');
	}

	function highlight(el: Element | null) {
		if (!browser || !el || !overlayBox || !overlayLabel) return clearHighlight();

		const r = (el as HTMLElement).getBoundingClientRect();

		overlayBox.style.display = 'block';
		overlayBox.style.left = `${r.left}px`;
		overlayBox.style.top = `${r.top}px`;
		overlayBox.style.width = `${r.width}px`;
		overlayBox.style.height = `${r.height}px`;

		overlayLabel.textContent = getDomPath(el);
		overlayLabel.style.display = 'block';
		overlayLabel.style.left = `${r.left}px`;
		overlayLabel.style.top = `${Math.max(0, r.top - 28)}px`;

		(el as HTMLElement).scrollIntoView({ block: 'center', behavior: 'smooth' });
	}

	/* ---------------- actions ---------------- */

	function run() {
		const parsed = safeParse(inputText);
		if (!parsed) {
			status = 'Invalid JSON';
			return;
		}

		const target: MixpanelTarget | null = parsed.$target ?? parsed;
		const elements: MixpanelElementPathEntry[] | undefined = parsed.$elements;

		if (!target) {
			status = 'Missing $target';
			return;
		}

		let found: Candidate[] = [];

		if (Array.isArray(elements) && elements.length) {
			const els = findUsingElementsPath(elements);
			if (els.length) {
				found = els.map((el) => ({ el, score: 999 }));
			}
		}

		candidates = found.length ? found : findCandidatesFromTarget(target);

		if (!candidates.length) {
			status = 'No matches';
			clearHighlight();
			return;
		}

		selectedIndex = 0;
		highlight(candidates[0].el);
		status = `1 / ${candidates.length}`;
	}

	function step(dir: number) {
		if (!candidates.length) return;
		selectedIndex = (selectedIndex + dir + candidates.length) % candidates.length;
		highlight(candidates[selectedIndex].el);
		status = `${selectedIndex + 1} / ${candidates.length}`;
	}

	onMount(() => {
		if (!browser) return;
		ensureOverlay();
		window.addEventListener('resize', () => highlight(candidates[selectedIndex]?.el ?? null));
		window.addEventListener('scroll', () => highlight(candidates[selectedIndex]?.el ?? null), true);
	});

	onDestroy(() => {
		overlayBox?.remove();
		overlayLabel?.remove();
	});
</script>

<div
	class="fixed right-4 bottom-4 z-[2147483646] w-[420px] max-w-[92vw] rounded-2xl border border-white/15 bg-zinc-950/95 p-3 shadow-2xl"
>
	<div class="mb-2 flex items-center justify-between">
		<div class="text-sm font-semibold text-white">Mixpanel Target Highlighter</div>
		<div class="text-xs text-white/70">{status}</div>
	</div>

	<textarea
		bind:value={inputText}
		spellcheck="false"
		placeholder="Paste $target or full properties JSON"
		class="h-36 w-full resize-y rounded-xl border border-white/15 bg-black/40 p-2 font-mono text-[12px] text-white outline-none"
	/>

	<div class="mt-2 flex gap-2">
		<button
			on:click={run}
			class="rounded-xl border border-white/20 bg-red-500/20 px-3 py-2 text-xs font-semibold text-white"
		>
			Highlight
		</button>

		<button
			on:click={() => step(-1)}
			disabled={!candidates.length}
			class={cx(
				'rounded-xl border px-3 py-2 text-xs',
				candidates.length
					? 'border-white/20 bg-white/10 text-white'
					: 'border-white/10 text-white/40'
			)}
		>
			Prev
		</button>

		<button
			on:click={() => step(1)}
			disabled={!candidates.length}
			class={cx(
				'rounded-xl border px-3 py-2 text-xs',
				candidates.length
					? 'border-white/20 bg-white/10 text-white'
					: 'border-white/10 text-white/40'
			)}
		>
			Next
		</button>

		<button
			on:click={() => {
				inputText = '';
				candidates = [];
				selectedIndex = 0;
				status = '';
				clearHighlight();
			}}
			class="ml-auto rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white"
		>
			Clear
		</button>
	</div>
</div>
