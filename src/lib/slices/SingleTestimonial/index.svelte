<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.SingleTestimonialSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
>
	<div class="mx-auto max-w-2xl lg:max-w-4xl">
		<figure class="mt-10">
			<blockquote class="font-body text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
				<PrismicRichText field={slice.primary.quote} />
			</blockquote>
			<figcaption class="mt-10">
				<PrismicImage field={slice.primary.user_image} class="mx-auto size-10 rounded-full" />

				<div class="mt-4 flex items-center justify-center space-x-3 text-base">
					<div class="font-semibold text-gray-900">{slice.primary.name}</div>
					<svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
						<circle r="1" cx="1" cy="1" />
					</svg>
					<div class="text-gray-600">{slice.primary.position}</div>
				</div>
			</figcaption>
		</figure>
	</div>
</section>
