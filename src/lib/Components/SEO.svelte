<script lang="ts">
	import { generatePageName } from '$lib/Utils/generatePageName';
	import { page } from '$app/state';

	type SeoData = {
		pageName?: string;
		siteName?: string;
		title?: string;
		meta_description?: string;
		url?: string;
		index?: boolean;
		meta_image?: {
			url: string;
			alt: string;
		};
	};

	let {
		pageName,
		siteName = 'Career Fingerprint',
		meta_description = 'Career Fingerprint helps professionals and students organize accomplishments, prepare for interviews, and create impactful resumes.',
		url = page.url.href,
		index = page.data.index ?? true
	}: SeoData = $props();
</script>

{#snippet jsonLdWebsite()}
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebSite",
			"name": "Career Fingerprint",
			"url":  "https://career-fingerprint.com"
		},
	</script>
{/snippet}

<svelte:head>
	<!-- META TAGS -->
	<title>{generatePageName(pageName)}</title>
	<meta name="description" content={meta_description} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={meta_description} />
	<meta property="og:url" content={url} />

	<!-- SCHEMA JSONLD -->
	{@render jsonLdWebsite()}

	<!-- TWITTER START -->
	<!-- <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={generatePageName(pageName)} />
	<meta name="twitter:description" content={meta_description} />
	<meta name="twitter:url" content={url} /> -->
	<!-- TWITTER END -->
</svelte:head>
