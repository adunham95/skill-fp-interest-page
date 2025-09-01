<script lang="ts">
	import { generatePageName } from '$lib/Utils/generatePageName';
	import { page } from '$app/state';
	import { asImageSrc, type ImageFieldImage } from '@prismicio/client';

	type SeoData = {
		pageName?: string;
		siteName?: string;
		title?: string;
		meta_description?: string;
		url?: string;
		index?: boolean;
		meta_image?: ImageFieldImage;
	};

	let {
		pageName,
		siteName = 'Career Fingerprint',
		meta_description = 'Career Fingerprint helps professionals and students organize accomplishments, prepare for interviews, and create impactful resumes.',
		url = page.url.href,
		index = page.data.index ?? true,
		meta_image
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
	<meta property="og:site_name" content={siteName} />

	<meta property="og:image" content={asImageSrc(meta_image)} />

	<!-- SCHEMA JSONLD -->
	{@render jsonLdWebsite()}

	<!-- TWITTER START -->
	<!-- <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={generatePageName(pageName)} />
	<meta name="twitter:description" content={meta_description} />
	<meta name="twitter:url" content={url} /> -->
	<!-- TWITTER END -->
</svelte:head>
