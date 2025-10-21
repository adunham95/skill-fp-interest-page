<script lang="ts">
	import { PrismicImage, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import type { PageProps } from './$types';
	import Seo from '$lib/Components/SEO.svelte';

	const { data }: PageProps = $props();
</script>

<Seo
	meta_image_url={`https://mycareerfingerprint.com/api/og?message=${data.page.data.meta_title?.toString() || data.page.data.title}`}
	pageName={data.page.data.meta_title?.toString() || data.page.data.title?.toString()}
	meta_description={data.page.data.meta_description?.toString() ||
		data.page.data.description?.toString()}
/>

<div class="mx-auto max-w-5xl px-0 pt-6 text-base/7 text-gray-700 lg:px-8">
	<p class="text-primary px-2 text-base/7 font-semibold">{data.page.data.label}</p>
	<h1 class="mt-2 px-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
		{data.page.data.title}
	</h1>

	<div class="relative isolate my-2 overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
		<PrismicImage
			field={data.page.data.cover_image}
			class="absolute inset-0 -z-10 size-full object-cover opacity-70"
		/>
	</div>

	<SliceZone slices={data.page.data.slices} {components} />
</div>
