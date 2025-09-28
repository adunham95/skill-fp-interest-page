<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.PricingOverviewSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-24 sm:py-32"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl sm:text-center">
			<h2
				class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance"
			>
				{slice.primary.title}
			</h2>
			<div
				class="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
			>
				<PrismicRichText field={slice.primary.description} />
			</div>
		</div>
		{#each slice.primary.offers as item}
			<!-- Render content for item -->
			<div
				class="mx-auto mt-16 max-w-2xl rounded-3xl ring-3 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
			>
				<div class="p-8 sm:p-10 lg:flex-auto">
					<h3 class="text-3xl font-semibold tracking-tight text-gray-900">{item.offer_title}</h3>
					<div class="mt-6 text-base/7 text-gray-600">
						<PrismicRichText field={item.offer_description} />
					</div>
					<div class="mt-10 flex items-center gap-x-4">
						<h4 class="text-primary flex-none text-sm/6 font-semibold">{item.included_title}</h4>
						<div class="h-px flex-auto bg-gray-100"></div>
					</div>
					<ul
						role="list"
						class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
					>
						{#each item?.feature_set || [] as subItem}
							<!-- Render content for item -->
							<li class="flex gap-x-3">
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									data-slot="icon"
									aria-hidden="true"
									class="text-accent h-6 w-5 flex-none"
								>
									<path
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									/>
								</svg>
								<PrismicRichText field={subItem.feature_item} />
							</li>
						{/each}
					</ul>
				</div>
				<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
					<div
						class="rounded-2xl bg-gray-50 py-10 text-center inset-ring-2 inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
					>
						<div class="mx-auto max-w-xs px-8">
							<p class="text-base font-semibold text-gray-600">{item.price_label}</p>
							<p class="mt-6 flex items-baseline justify-center gap-x-2">
								<span class="text-5xl font-semibold tracking-tight text-gray-900"
									>${item.price_amount}</span
								>
								<span class="text-sm/6 font-semibold tracking-wide text-gray-600"
									>{item.price_timeframe}</span
								>
							</p>
							<PrismicLink
								field={item.cta_button}
								class="bg-primary hover:bg-primary-700 focus-visible:outline-primary mt-10 inline-flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
							/>
							<a
								href="#"
								class="bg-accent hover:bg-accent-700 focus-visible:outline-accent mt-10 inline-flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
							>
								Hello World
							</a>
							<p class="mt-6 text-xs/5 text-gray-600">
								{item.cta_note}
							</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
