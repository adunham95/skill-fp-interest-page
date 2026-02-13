<script lang="ts">
	import { PrismicLink } from '@prismicio/svelte';
	import type { NavItem } from './types';

	const nav: NavItem = $props();
	let open = $state(false);
</script>

{#if nav.item_type === 'link'}
	<PrismicLink
		field={nav.link}
		class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
	>
		{nav.label}
	</PrismicLink>
{:else if nav.item_type === 'dropdown'}
	<button
		type="button"
		class="flex w-full cursor-pointer items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
		aria-expanded={open}
		aria-controls={nav.key}
		onclick={() => (open = !open)}
	>
		{nav.label}
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			class="size-5 flex-none transition-transform"
			class:rotate-180={open}
		>
			<path
				d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
				fill-rule="evenodd"
			/>
		</svg>
	</button>

	{#if open}
		<div id={nav.key} class="mt-2 block space-y-2">
			{#each nav.dropdown_items as item}
				<PrismicLink
					field={item.link}
					class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>
					{item.label}
				</PrismicLink>
			{/each}
		</div>
	{/if}
{/if}
