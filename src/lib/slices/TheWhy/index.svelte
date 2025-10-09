<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {
		PrismicEmbed,
		PrismicImage,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.TheWhySlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative isolate overflow-hidden pt-14">
		<div class="mx-auto max-w-6xl px-6 py-32 lg:px-8">
			<h2 class="text-primary font-title mb-1 text-base/7 font-semibold">
				{slice.primary.section_label}
			</h2>
			<div
				class="md:mx-0 md:grid md:max-w-none md:grid-cols-2 md:gap-x-16 md:gap-y-8 xl:grid-rows-1 xl:gap-x-8"
			>
				<div class="mt-6 lg:mt-0">
					<figure class="">
						<blockquote class="font-body text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
							<PrismicRichText field={slice.primary.quote} />
						</blockquote>
						<figcaption class="mt-10">
							<PrismicImage field={slice.primary.user_image} class="mx-auto size-10 rounded-full" />

							<div class="mt-4 flex items-center justify-center space-x-3 text-base">
								<div class="font-semibold text-gray-900">{slice.primary.name}</div>
								<svg
									viewBox="0 0 2 2"
									width="3"
									height="3"
									aria-hidden="true"
									class="fill-gray-900"
								>
									<circle r="1" cx="1" cy="1" />
								</svg>
								<div class="text-gray-600">{slice.primary.position}</div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="relative mt-10 aspect-16/9 sm:h-auto lg:mt-0">
					<div class="video-container">
						<PrismicEmbed field={slice.primary.video} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
