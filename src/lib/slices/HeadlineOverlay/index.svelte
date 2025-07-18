<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeadlineOverlaySlice>;

	const { slice }: Props = $props();

	{
		slice.primary.title;
	}
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative isolate overflow-hidden">
		<PrismicImage
			class="absolute inset-0 -z-10 size-full object-cover"
			field={slice.primary.background_image}
		/>

		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
			<div
				class="mx-auto max-w-2xl rounded-md bg-white/30 p-4 backdrop-blur-md lg:mx-0 lg:shrink-0 lg:pt-8"
			>
				<h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-7xl">
					{slice.primary.title}
				</h1>
				<div class="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>
			<div
				class="mx-auto flex max-w-2xl lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
			></div>
		</div>
	</div>
</section>
