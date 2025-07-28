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

<SliceZone slices={data.page.data.slices} {components} />
