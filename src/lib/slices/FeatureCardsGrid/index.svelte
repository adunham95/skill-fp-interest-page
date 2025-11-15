<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FeatureCardsGridSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-background py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-primary font-title text-base/7 font-semibold">{slice.primary.eyebrow}</h2>
				<p
					class="font-paragraph mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:leading-14"
				>
					{slice.primary.title}
				</p>
				<div class="font-body mt-6 text-lg/8 text-gray-900">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>
			<div class="auto-fit-250 mx-auto mt-16 grid max-w-2xl gap-4 lg:mx-0 lg:max-w-none">
				{#each slice.primary.features as item}
					<article class=" flex flex-col items-start justify-between">
						<div class="border-secondary relative w-full rounded-2xl border-2">
							<PrismicImage
								class="bg-background aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
								field={item.illustration}
							/>
						</div>
						<div class="max-w-xl">
							<div class="group relative">
								<h3 class="mt-8 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
									{item.feature_title}
								</h3>
								<div class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
									<PrismicRichText field={item.feature_description} />
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
