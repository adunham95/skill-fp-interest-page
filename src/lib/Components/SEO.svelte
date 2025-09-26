<script lang="ts">
	import { generatePageName } from '$lib/Utils/generatePageName';
	import { page } from '$app/state';
	import { asImageSrc, type ImageFieldImage } from '@prismicio/client';

	const CANONICAL_DOMAIN = 'https://mycareerfingerprint.com';

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
		url = `${CANONICAL_DOMAIN}${page.url.pathname}`,
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
			"url":  "https://mycareerfingerprint.com"
		},
	</script>
{/snippet}

{#snippet jsonLdOrganization()}
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Career Fingerprint",
			"url": "https://mycareerfingerprint.com",
			"logo": "https://mycareerfingerprint.com/logo-brand.svg",
			"sameAs": [
				"https://www.instagram.com/careerfingerprint/",
				"https://www.linkedin.com/company/career-fingerprint/",
				"https://www.youtube.com/@CareerFingerprint"
			]
		}
	</script>
{/snippet}

<svelte:head>
	<link rel="canonical" href={CANONICAL_DOMAIN} />
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
	{@render jsonLdOrganization()}

	<!-- TWITTER START -->
	<!-- <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={generatePageName(pageName)} />
	<meta name="twitter:description" content={meta_description} />
	<meta name="twitter:url" content={url} /> -->
	<!-- TWITTER END -->
</svelte:head>
