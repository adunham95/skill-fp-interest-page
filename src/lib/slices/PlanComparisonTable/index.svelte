<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.PlanComparisonTableSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
		<table class="w-full text-left max-sm:hidden">
			<caption class="sr-only"> Pricing plan comparison </caption>
			<colgroup>
				<col class="w-2/5" />
				<col class="w-1/5" />
				<col class="w-1/5" />
				<col class="w-1/5" />
			</colgroup>
			<thead>
				<tr>
					<td class="p-0"></td>
					{#each slice.primary.plans as item}
						<th scope="col" class="p-0">
							<div class="text-sm font-semibold text-indigo-600">
								{item.plan_label} <span class="sr-only">plan</span>
							</div>
						</th>
					{/each}
				</tr>
				<tr>
					<th class="p-0"></th>
					{#each slice.primary.plans as item}
						<td class="px-0 pt-3 pb-0">
							<PrismicLink
								field={item.cta}
								class="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50"
							/>
						</td>
					{/each}
				</tr>
			</thead>
			<tbody class="group">
				<tr>
					<th scope="colgroup" colspan="4" class="px-0 pt-10 pb-0 group-first-of-type:pt-5">
						<div
							class="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950"
						>
							Reporting
						</div>
					</th>
				</tr>
				<tr class="border-b border-gray-100 last:border-none">
					<th scope="row" class="px-0 py-4 text-sm/6 font-normal text-gray-600"
						>Advanced analytics</th
					>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Starter</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Growth</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Scale</span>
					</td>
				</tr>
				<tr class="border-b border-gray-100 last:border-none">
					<th scope="row" class="px-0 py-4 text-sm/6 font-normal text-gray-600">Basic reports</th>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-gray-400"
						>
							<path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
						</svg>
						<span class="sr-only">Not included in Starter</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Growth</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Scale</span>
					</td>
				</tr>
				<tr class="border-b border-gray-100 last:border-none">
					<th scope="row" class="px-0 py-4 text-sm/6 font-normal text-gray-600"
						>Professional reports</th
					>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-gray-400"
						>
							<path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
						</svg>
						<span class="sr-only">Not included in Starter</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-gray-400"
						>
							<path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
						</svg>
						<span class="sr-only">Not included in Growth</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Scale</span>
					</td>
				</tr>
				<tr class="border-b border-gray-100 last:border-none">
					<th scope="row" class="px-0 py-4 text-sm/6 font-normal text-gray-600"
						>Custom report builder</th
					>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-gray-400"
						>
							<path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
						</svg>
						<span class="sr-only">Not included in Starter</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-gray-400"
						>
							<path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
						</svg>
						<span class="sr-only">Not included in Growth</span>
					</td>
					<td class="p-4 max-sm:text-center">
						<svg
							viewBox="0 0 16 16"
							fill="currentColor"
							data-slot="icon"
							aria-hidden="true"
							class="inline-block size-4 fill-green-600"
						>
							<path
								d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Included in Scale</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
