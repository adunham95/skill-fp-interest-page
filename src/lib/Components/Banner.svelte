<script lang="ts">
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte';

	export let banner;
	let dismissed = false;

	const bgColor = banner.data.background_color || '#ff7a8a';

	function colorIsDarkSimple() {
		let color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
		let r = parseInt(color.substring(0, 2), 16); // hexToR
		let g = parseInt(color.substring(2, 4), 16); // hexToG
		let b = parseInt(color.substring(4, 6), 16); // hexToB
		return r * 0.299 + g * 0.587 + b * 0.114 <= 186;
	}
</script>

{#if banner && !dismissed}
	<div
		class={`flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${colorIsDarkSimple() ? 'text-white' : 'text-black'}`}
		style="background-color: {bgColor}"
	>
		<div class="flex items-center text-sm/6">
			<strong class="font-semibold">{banner.data.title}</strong>
			{#if banner.data.message}
				<svg viewBox="0 0 2 2" aria-hidden="true" class="mx-2 inline size-0.5 fill-current">
					<circle r="1" cx="1" cy="1" />
				</svg>
				<PrismicRichText field={banner.data.message} />
			{/if}
			{#if banner.data.cta.url}
				<svg viewBox="0 0 2 2" aria-hidden="true" class="mx-2 inline size-0.5 fill-current">
					<circle r="1" cx="1" cy="1" />
				</svg>
				<PrismicLink field={banner.data.cta} class="underline" />
			{/if}
		</div>
		<div class="flex flex-1 justify-end">
			{#if banner.data.dismissible}
				<button
					type="button"
					class="-m-3 p-3 focus-visible:-outline-offset-4"
					on:click={() => (dismissed = true)}
				>
					<span class="sr-only">Dismiss</span>
					<svg
						viewBox="0 0 20 20"
						fill="currentColor"
						data-slot="icon"
						aria-hidden="true"
						class="size-5 text-white"
					>
						<path
							d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
						/>
					</svg>
				</button>
			{/if}
		</div>
	</div>
{/if}
