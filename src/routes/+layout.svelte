<script lang="ts">
	import '../app.css';
	import '../button-variants.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import Banner from '$lib/Components/Banner.svelte';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';

	let { children, data } = $props();
</script>

<Banner banner={data.banner} />

<Header {...data.header?.data} />

{@render children()}
<PrismicPreview {repositoryName} />

<Footer {...data.footer?.data} />
