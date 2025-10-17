<script lang="ts">
	import { tick } from 'svelte';

	const {
		name = 'HEATSTROKE',
		type = 'Primary',
		hex = '#ff7a8a',
		rgb = '255, 122, 138',
		cmyk = '0, 52, 46, 0',
		shades = [],
		tints = []
	} = $props();

	let toastVisible = $state(false);
	let toastMessage = $state('');

	function rgbToHex(rgbString: string): string {
		// Extract the numeric values from "rgb(r, g, b)" or "rgba(r, g, b, a)"
		const match = rgbString.match(/\d+/g);
		if (!match) return rgbString;

		const [r, g, b] = match.map(Number);
		return (
			'#' +
			[r, g, b]
				.map((x) => x.toString(16).padStart(2, '0'))
				.join('')
				.toUpperCase()
		);
	}

	async function copyColor(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		const color = getComputedStyle(target).backgroundColor;
		const hexColor = rgbToHex(color);
		try {
			await navigator.clipboard.writeText(hexColor);
			toastMessage = `${hexColor} copied!`;
			toastVisible = true;
			await tick();
			setTimeout(() => (toastVisible = false), 1500);
		} catch (err) {
			console.error('Failed to copy color:', err);
		}
	}
</script>

<div class="relative inline-block">
	<div class="overflow-hidden rounded-lg bg-white shadow-md">
		<div class="grid grid-cols-5">
			{#each shades as shadeClass}
				<button
					class={`aspect-square h-full w-full cursor-pointer ${shadeClass}`}
					onclick={copyColor}
				>
					<span class="sr-only"> Copy Color </span>
				</button>
			{/each}
		</div>

		<button
			class="block h-40 w-full cursor-pointer"
			style="background-color: {hex}"
			onclick={copyColor}
		>
			<span class="sr-only"> Copy Base Color </span>
		</button>

		<div class="grid grid-cols-5">
			{#each tints as tintClass}
				<button
					class={`aspect-square h-full w-full cursor-pointer ${tintClass}`}
					onclick={copyColor}
				>
					<span class="sr-only"> Copy Color </span>
				</button>
			{/each}
		</div>

		<div class="space-y-1 p-4 text-sm">
			<div class="font-title text-lg font-bold">{name}</div>
			<div class="text-md font-bold">{type}</div>
			<div class="text-gray-800">{hex}</div>
			<div class="text-gray-800">RGB {rgb}</div>
			<div class="text-gray-800">CMYK {cmyk}</div>
		</div>
	</div>

	<!-- Toast -->
	{#if toastVisible}
		<div
			class="animate-fade-in-out absolute bottom-[0.5rem] left-1/2 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-md"
		>
			{toastMessage}
		</div>
	{/if}
</div>

<style>
	@keyframes fadeInOut {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		10% {
			opacity: 1;
			transform: translateY(0);
		}
		90% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(10px);
		}
	}

	.animate-fade-in-out {
		animation: fadeInOut 1.5s ease forwards;
	}
</style>
