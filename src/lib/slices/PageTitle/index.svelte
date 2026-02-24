<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.PageTitleSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" px-6 py-24 sm:py-32 lg:px-8"
>
	<div class="mx-auto max-w-2xl text-center">
		{#if slice.slice_label !== ''}
			<p class="text-primary text-base/7 font-semibold">{slice.primary.section_label}</p>
		{/if}
		<h1 class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
			{slice.primary.title}
		</h1>
		<div class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
			<PrismicRichText field={slice.primary.description} />
		</div>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			{#if slice.primary.primary_cta?.text}
				<PrismicLink class="btn btn--primary" field={slice.primary.primary_cta} />
			{/if}
			{#if slice.primary.secondary_cta?.text}
				<PrismicLink class="btn btn-text--secondary" field={slice.primary.secondary_cta} />
			{/if}
		</div>

		{#if slice.primary.micro_copy}
			<div class="mt-5">
				<p class="text-sm text-pretty text-gray-500">
					{slice.primary.micro_copy}
				</p>
			</div>
		{/if}
	</div>
</section>
