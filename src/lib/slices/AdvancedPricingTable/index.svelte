<script lang="ts">
	import Button from '$lib/Components/Button.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.AdvancedPricingTableSlice>;

	const { slice }: Props = $props();

	const getPlanCell = (feature, planKey) => {
		const mapping = feature.plan_values?.find((p) => p.plan_key === planKey);

		if (!mapping) return { type: 'none' };

		if (mapping.value_type === 'text' && mapping.text_value) {
			return { type: 'text', value: mapping.text_value };
		}

		if (mapping.value_type === 'yes_no') {
			return { type: mapping.bool_value ? 'yes' : 'no' };
		}

		return { type: 'none' };
	};
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-24 sm:py-32"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-primary font-title text-base/7 font-semibold">
				{slice.primary.section_label}
			</h2>
			<p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
				{slice.primary.title}
			</p>
		</div>
		<div
			class="font-body mx-auto mt-6 mb-2 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8"
		>
			<PrismicRichText field={slice.primary.subtitle} />
		</div>

		<div class="flex justify-center gap-x-2">
			{#each slice.primary.section_ctas as link, idx}
				<Button {...link} index={idx} />
			{/each}
		</div>

		<!-- Mobile View -->
		<div class="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
			{#each slice.primary.plans as item}
				<section class="rounded-lg border border-gray-200 p-8 shadow-sm">
					<h3 class="text-sm/6 font-semibold text-gray-900">{item.name}</h3>

					{#if item.description}
						<div class="mt-2 text-sm text-gray-600">
							<PrismicRichText field={item.description} />
						</div>
					{/if}

					{#if item.show_prices}
						<p class="mt-4 flex items-baseline gap-x-1 text-gray-900">
							{#if (item.price || 0) > 0}
								<span class="text-4xl font-semibold">${item.price}</span>
							{:else if item.pricetext}
								<span class="text-4xl font-semibold">{item.pricetext}</span>
							{:else}
								<span class="text-4xl font-semibold">Free</span>
							{/if}
							<span class="text-sm font-semibold">{item.price_suffix}</span>
						</p>
					{/if}

					{#if item.cta?.text}
						<PrismicLink
							field={item.cta}
							class="bg-primary hover:bg-primary-700 focus-visible:outline-primary mt-8 inline-flex w-full justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
						/>
					{/if}

					<!-- Feature list for this one plan -->
					{#if slice.primary.features?.length > 0}
						<ul class="mt-8 space-y-3 border-t border-gray-200 pt-6">
							{#each slice.primary.features as feature}
								{@const cell = getPlanCell(feature, item.type_key)}

								<li class="flex items-start justify-between">
									<div>
										<div class="text-sm font-medium text-gray-900">
											{feature.feature_name}
										</div>
										{#if feature.feature_description}
											<div class="text-xs text-gray-500">
												<PrismicRichText field={feature.feature_description} />
											</div>
										{/if}
									</div>

									<!-- Reuse desktop cell logic -->
									<div class="ml-4">
										{#if cell.type === 'text'}
											<div class="text-sm text-gray-500">{cell.value}</div>
										{:else if cell.type === 'yes'}
											<svg viewBox="0 0 20 20" fill="currentColor" class="text-accent size-5">
												<path
													d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
													clip-rule="evenodd"
													fill-rule="evenodd"
												/>
											</svg>
										{:else}
											<svg viewBox="0 0 20 20" fill="currentColor" class="size-5 text-gray-400">
												<path
													d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
													clip-rule="evenodd"
													fill-rule="evenodd"
												/>
											</svg>
										{/if}
									</div>
								</li>
							{/each}
						</ul>
					{/if}
				</section>
			{/each}
		</div>

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
									{#if item.show_prices}
										<div class="flex items-baseline gap-x-1 text-gray-900">
											{#if (item.price || 0) > 0}
												<span class="text-4xl font-semibold">${item.price}</span>
											{:else if item.pricetext}
												<span class="text-4xl font-semibold">{item.pricetext}</span>
											{:else}
												<span class="text-4xl font-semibold">Free</span>
											{/if}
											<span class="text-sm/6 font-semibold">{item.price_suffix}</span>
										</div>
									{/if}
									{#if item.description}
										<div class="text-sm text-gray-600">
											<PrismicRichText field={item.description} />
										</div>
									{/if}
									{#if item.cta?.text}
										<PrismicLink
											field={item.cta}
											class="bg-accent hover:bg-accent-700 focus-visible:outline-accent border-secondary mt-10 inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold text-white shadow-xs focus-visible:outline-1 focus-visible:outline-offset-1"
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
						{#each slice.primary.features as feature}
							<tr>
								<th scope="row" class="py-4 text-sm/6 font-normal text-gray-900">
									{feature.feature_name}
									<div class="b-0 absolute h-px bg-gray-900/5"></div>
									{#if feature.feature_description}
										<div class="text-xs text-gray-500">
											<PrismicRichText field={feature.feature_description} />
										</div>
									{/if}
								</th>

								{#each slice.primary.plans as plan}
									{@render cell(feature, plan.type_key)}
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>

{#snippet cell(feature, plan_key)}
	{@const cell = getPlanCell(feature, plan_key)}
	<td class="px-6 py-4 xl:px-8">
		{#if cell.type === 'text'}
			<div class="text-center text-sm/6 text-gray-500">{cell.value}</div>
		{:else if cell.type === 'yes'}
			<svg viewBox="0 0 20 20" fill="currentColor" class="text-accent mx-auto size-5">
				<path
					d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				/>
			</svg>
			<span class="sr-only">Included</span>
		{:else}
			<svg viewBox="0 0 20 20" fill="currentColor" class="mx-auto size-5 text-gray-400">
				<path
					d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				/>
			</svg>
			<span class="sr-only">Not included</span>
		{/if}
	</td>
{/snippet}
