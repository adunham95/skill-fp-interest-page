<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.PricingComparisonTableSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-24 sm:py-32"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-primary text-base/7 font-semibold">{slice.primary.section_label}</h2>
			<p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
				{slice.primary.title}
			</p>
		</div>
		<div
			class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8"
		>
			<PrismicRichText field={slice.primary.subtitle} />
		</div>

		<!-- xs to lg -->
		<div class="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
			{#each slice.primary.plans as item}
				<section class="p-8">
					<h3 id="tier-starter" class="text-sm/6 font-semibold text-gray-900">{item.name}</h3>
					<p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
						{#if (item.price || 0) > 0}
							<span class="text-4xl font-semibold">${item.price}</span>
						{:else}
							<span class="text-4xl font-semibold">Free</span>
						{/if}
						<span class="text-sm font-semibold">{item.price_suffix}</span>
					</p>
					{#if item.cta?.text}
						<PrismicLink
							field={item.cta}
							class="bg-primary hover:bg-primary-700 focus-visible:outline-primary mt-8 inline-flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
						/>
					{/if}

					<ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-900">
						{#each slice.primary.features as feature}
							{#if item.type === 'free' && feature.free_included}
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
									<div>
										<span>
											{feature.feature_name}

											{#if feature.free_value}
												<span class="text-sm/6 text-gray-500">({feature.free_value})</span>
											{/if}
										</span>
										{#if feature.feature_description}
											<span class="text-sm/8 text-gray-500">
												<PrismicRichText field={feature.feature_description} />
											</span>
										{/if}
									</div>
								</li>
							{:else if item.type === 'premium' && feature.premium_included}
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
									<div>
										<span>
											{feature.feature_name}

											{#if feature.premium_value}
												<span class="text-sm/6 text-gray-500">({feature.premium_value})</span>
											{/if}
										</span>
										{#if feature.feature_description}
											<span class="text-xs text-gray-500">
												<PrismicRichText field={feature.feature_description} />
											</span>
										{/if}
									</div>
								</li>
							{/if}
						{/each}
					</ul>
				</section>
			{/each}
		</div>

		<!-- lg+ -->
		<div class="isolate mt-20 hidden lg:block">
			<div class="relative -mx-8">
				<table class="w-full table-fixed border-separate border-spacing-x-8 text-left">
					<caption class="sr-only"> Pricing plan comparison </caption>
					<colgroup>
						{#each Array(slice.primary.plans.length + 1) as i}
							<col style={`calc(1/${slice.primary.plans.length + 1} * 100)`} />
						{/each}
					</colgroup>
					<thead>
						<tr>
							<td></td>
							{#each slice.primary.plans as item}
								<!-- Render content for item -->
								<th scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
									<div class="text-sm/7 font-semibold text-gray-900">{item.name}</div>
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
						<tr>
							<th scope="row"><span class="sr-only">Price</span></th>
							{#each slice.primary.plans as item}
								<td class="px-6 pt-2 xl:px-8">
									<div class="flex items-baseline gap-x-1 text-gray-900">
										{#if (item.price || 0) > 0}
											<span class="text-4xl font-semibold">${item.price}</span>
										{:else}
											<span class="text-4xl font-semibold">Free</span>
										{/if}
										<span class="text-sm/6 font-semibold">{item.price_suffix}</span>
									</div>
									{#if item.cta?.text}
										<PrismicLink
											field={item.cta}
											class="bg-accent hover:bg-accent-700 focus-visible:outline-accent border-secondary mt-10 inline-flex rounded-md border-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
										/>
									{/if}
								</td>
							{/each}
						</tr>
						<tr>
							<th
								scope="colgroup"
								colspan={slice.primary.plans.length + 1}
								class="pt-8 pb-4 text-sm/6 font-semibold text-gray-900"
							>
								Features
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
							</th>
						</tr>

						{#each slice.primary.features as item}
							<!-- Render content for item -->
							<tr>
								<th scope="row" class="py-4 text-sm/6 font-normal text-gray-900">
									{item.feature_name}
									<div class="b-0 absolute h-px bg-gray-900/5"></div>
									<div class="text-xs text-gray-500">
										<PrismicRichText field={item.feature_description} />
									</div>
								</th>
								<td class="px-6 py-4 xl:px-8">
									{#if item.free_value}
										<div class="text-center text-sm/6 text-gray-500">{item.free_value}</div>
									{:else if item.free_included}
										<svg
											viewBox="0 0 20 20"
											fill="currentColor"
											data-slot="icon"
											aria-hidden="true"
											class="text-accent mx-auto size-5"
										>
											<path
												d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
												clip-rule="evenodd"
												fill-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Included in Free</span>
									{:else}
										<svg
											viewBox="0 0 20 20"
											fill="currentColor"
											data-slot="icon"
											aria-hidden="true"
											class="mx-auto size-5 text-gray-400"
										>
											<path
												d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
												clip-rule="evenodd"
												fill-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Not included in Free</span>
									{/if}
								</td>
								<td class="px-6 py-4 xl:px-8">
									{#if item.premium_value}
										<div class="text-center text-sm/6 text-gray-500">{item.premium_value}</div>
									{:else if item.premium_included}
										<svg
											viewBox="0 0 20 20"
											fill="currentColor"
											data-slot="icon"
											aria-hidden="true"
											class="text-accent mx-auto size-5"
										>
											<path
												d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
												clip-rule="evenodd"
												fill-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Included in Premium</span>
									{:else}
										<svg
											viewBox="0 0 20 20"
											fill="currentColor"
											data-slot="icon"
											aria-hidden="true"
											class="mx-auto size-5 text-gray-400"
										>
											<path
												d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
												clip-rule="evenodd"
												fill-rule="evenodd"
											/>
										</svg>
										<span class="sr-only">Not included in Premium</span>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
