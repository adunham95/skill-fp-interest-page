<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import type { PageProps } from './$types';
	import Seo from '$lib/Components/SEO.svelte';

	const { data }: PageProps = $props();
</script>

<Seo
	meta_image={data.page.data.meta_image}
	pageName={data.page.data.meta_title?.toString()}
	meta_description={data.page.data.meta_description?.toString()}
/>

<div class="mx-auto max-w-3xl text-base/7 text-gray-700">
	<p class="text-primary text-base/7 font-semibold">{data.page.data.label}</p>
	<h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
		{data.page.data.title}
	</h1>

	<SliceZone slices={data.page.data.slices} {components} />
</div>
