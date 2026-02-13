<script lang="ts">
	import { PrismicLink } from '@prismicio/svelte';
	import type { NavItem } from './types';
	import Icon from '../Icon/Icon.svelte';

	const nav: NavItem = $props();
</script>

{#if nav.item_type === 'link'}
	<PrismicLink field={nav.link} class="text-sm/6 font-semibold text-gray-900">
		{nav.label}</PrismicLink
	>
{:else if nav.item_type === 'dropdown'}
	<div class="relative">
		<button
			type="button"
			popovertarget={nav.key}
			class="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
		>
			<span>{nav.label}</span>
			<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
				<path
					d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				/>
			</svg>
		</button>

		<el-popover
			id={nav.key}
			popover="auto"
			anchor="bottom"
			class="z-50 overflow-visible bg-transparent [--anchor-gap:12px] backdrop:bg-transparent
           open:flex
           data-closed:translate-y-1 data-closed:opacity-0
           data-enter:duration-200 data-enter:ease-out
           data-leave:duration-150 data-leave:ease-in"
		>
			<!-- This element controls the dropdown size -->
			<div
				class="w-136 max-w-[calc(100vw-2rem)] rounded-3xl bg-white p-4 text-sm/6
             shadow-lg ring-1 ring-gray-900/5"
			>
				{#each nav.dropdown_items as item}
					<div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
						<div
							class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<Icon iconKey={item.icon} class="group-hover:text-primary size-6 text-gray-600" />
						</div>
						<div>
							<PrismicLink field={item.link} class="font-semibold text-gray-900">
								{item.label}
								<span class="absolute inset-0"></span>
							</PrismicLink>
							<p class="mt-1 text-gray-600">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</el-popover>
	</div>
{/if}
