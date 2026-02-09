<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {
		PrismicImage,
		PrismicLink,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroWithCtaAndNavigationPreviewSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative isolate overflow-hidden bg-white"
>
	<div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
			<PrismicImage field={slice.primary.logo} class="h-11" />

			<h1 class="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
				{slice.primary.title}
			</h1>
			<div class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
				<PrismicRichText field={slice.primary.description} />
			</div>

			<div class="mt-10 flex items-center gap-x-6">
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
		<div
			class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
		>
			<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
				<div
					class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					<PrismicImage
						field={slice.primary.preview_image}
						class="max-h-[740px] w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
