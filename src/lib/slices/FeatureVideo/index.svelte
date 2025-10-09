<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicEmbed, PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FeatureScreenshotSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-background overflow-hidden py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="max-w-2xl">
				<h2 class="text-primary font-title text-base/7 font-semibold">
					{slice.primary.section_label}
				</h2>
				<p
					class="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance"
				>
					{slice.primary.title}
				</p>
			</div>
			<div class="relative mt-16 aspect-16/9 sm:h-auto">
				<div class="video-container">
					<PrismicEmbed field={slice.primary.video} />
				</div>
			</div>
		</div>
	</div>
</section>
