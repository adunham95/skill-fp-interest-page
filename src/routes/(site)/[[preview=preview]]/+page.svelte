<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import type { PageProps } from './$types';
	import Seo from '$lib/Components/SEO.svelte';

	const { data }: PageProps = $props();

	$inspect(data);
</script>

<Seo meta_image={data.homepage.data.meta_image} />

<SliceZone slices={data.homepage.data.slices} {components} />
