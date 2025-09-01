<script lang="ts">
	import Tag from '$lib/Components/Text/Tag.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FeatureSideHeroSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-secondary overflow-hidden py-24 text-gray-50 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="lg:pt-4 lg:pr-8">
					<div class="lg:max-w-lg">
						<Tag>
							{slice.primary.section_label}
						</Tag>
						<p
							class="font-title mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-5xl"
						>
							{slice.primary.section_title}
						</p>
						<div class="mt-6 text-lg/8 text-gray-100">
							<PrismicRichText field={slice.primary.description} />
						</div>
						<dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
							{#each slice.primary.features as item}
								<div class="relative pl-9">
									<dt class="inline font-semibold text-gray-50">
										<PrismicImage class="absolute top-1 left-1 size-5" field={item.icon} />
										{item.feature_title}
									</dt>
									<dd class="inline"><PrismicRichText field={item.feature_desc} /></dd>
								</div>
							{/each}
						</dl>
					</div>
				</div>
				<div
					class={` ${slice.variation === 'leftImage' ? 'flex items-start justify-end lg:order-first' : ''}`}
				>
					<PrismicImage
						class="bg-background w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
						field={slice.primary.side_image}
					/>
				</div>
			</div>
		</div>
	</div>
</section>
