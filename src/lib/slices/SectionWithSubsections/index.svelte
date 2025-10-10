<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.SectionWithSubsectionsSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class=" px-6 py-24 sm:py-32 lg:px-8 xl:mx-auto xl:max-w-7xl">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			{#each slice.primary.subsections as item}
				<h3
					class="pb-6 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl"
				>
					{item.subsection_heading}
				</h3>
				<div class="prose font-body">
					<PrismicRichText field={item.content} />
				</div>
			{/each}
		</div>
	</div>
</section>
