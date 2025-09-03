<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {
		PrismicImage,
		PrismicLink,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.CtaBlockSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative bg-white">
		<div
			class="bg-primary relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
		>
			<PrismicImage field={slice.primary.image} class="size-full object-cover" />
		</div>
		<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
			<div class="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
				<h2 class="text-primary text-base/7 font-semibold">{slice.primary.label}</h2>
				<p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
					{slice.primary.title}
				</p>
				<div class="mt-6 text-base/7 text-gray-600">
					<PrismicRichText field={slice.primary.description} />
				</div>
				<div class="mt-8">
					{#if slice.primary.cta.text}
						<PrismicLink
							field={slice.primary.cta}
							class="bg-primary hover:bg-primary-700 focus-visible:outline-primary inline-flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
