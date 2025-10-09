<script lang="ts">
	import '../app.css';
	import '../button-variants.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import Banner from '$lib/Components/Banner.svelte';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import ScrollIndicator from '$lib/Components/ScrollIndicator.svelte';
	import {
		PUBLIC_GTAG,
		PUBLIC_MITA_ID,
		PUBLIC_MIXPANEL_TOKEN,
		PUBLIC_TWAK_ID,
		PUBLIC_TWAK_WIDGET_ID
	} from '$env/static/public';
	import mixpanel from 'mixpanel-browser';

	injectSpeedInsights();

	let { children, data } = $props();

	let isProd = data.env === 'production';

	isProd &&
		mixpanel.init(PUBLIC_MIXPANEL_TOKEN, {
			debug: false,
			track_pageview: isProd ? true : false,
			autocapture: isProd
				? {
						pageview: 'full-url',
						click: true, // click tracking enabled
						scroll: true,
						submit: true,
						capture_text_content: true,
						block_url_regexes: [
							/\/preview/, // Prismic preview route
							/\/api\/preview/, // Preview API endpoint (if you use it)
							/\/slice-simulator/ // Slice Simulator route
						]
					}
				: {},

			record_sessions_percent: 1
		});
</script>

<svelte:head>
	{#if PUBLIC_GTAG}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GTAG}`}></script>
		{@html `
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${PUBLIC_GTAG}');
			</script>
		`}
	{/if}

	<script>
		var timeout = 3000; // Timeout value to remove the flicker (in milliseconds)
		!(function (h, i, d, e) {
			var t,
				n = h.createElement('style');
			(n.id = e),
				(n.innerHTML = 'body{opacity:0}'),
				h.head.appendChild(n),
				(t = d),
				(i.rmfk = function () {
					var t = h.getElementById(e);
					t && t.parentNode.removeChild(t);
				}),
				setTimeout(i.rmfk, t);
		})(document, window, timeout, 'abhide');
	</script>

	<!-- Mida A/B Testing Script (Place in <HEAD> for speed & no flicker) -->
	<script
		type="text/javascript"
		async
		src={`https://cdn.mida.so/js/optimize.js?key=${PUBLIC_MITA_ID}`}
	></script>
</svelte:head>

{#if data.banner}
	<Banner banner={data.banner} />
{/if}

<Header {...data.header?.data} />

{@render children()}
<PrismicPreview {repositoryName} />

<ScrollIndicator />

<Footer {...data.footer?.data} />

{#if isProd}
	<!-- By using this audio pixel code, the Customer hereby instructs AudioGO toProcess Personal Data in its quality as a sub-processor. The ownership and control of Personal Data remains with Customer, and Customer will always remain the Data Controller. Customer is responsible for compliance with its obligations as Data Controller under the Data Protection Laws, in particular for justification of any transmission of Personal Data to AudioGO (including but not limited providing any required notices and obtaining any required consents from the data subjects), and for its decisions concerning the Processing and use of the Personal Data. -->
	<img
		alt="audio-go"
		aria-hidden="true"
		src="https://us-41605-adswizz.attribution.adswizz.com/fire?pixelId=6105c760-11db-4581-aa69-5c1ad9ab36fc&type=sitevisit&subtype=HomePage&aw_0_req.gdpr=true&redirectURL=aHR0cHM6Ly9waXhlbC50YXBhZC5jb20vaWRzeW5jL2V4L3JlY2VpdmU_cGFydG5lcl9pZD0yOTk0JjwjaWYgcmVxdWVzdC5saXN0ZW5lcklkP21hdGNoZXMoJ1swLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfScpPnBhcnRuZXJfdHlwZWRfZGlkPSU3QiUyMkhBUkRXQVJFX0FORFJPSURfQURfSUQlMjIlM0ElMjIke3JlcXVlc3QubGlzdGVuZXJJZH0lMjIlN0Q8I2Vsc2VpZiByZXF1ZXN0Lmxpc3RlbmVySWQ_bWF0Y2hlcygnWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9Jyk-cGFydG5lcl90eXBlZF9kaWQ9JTdCJTIySEFSRFdBUkVfSURGQSUyMiUzQSUyMiR7cmVxdWVzdC5saXN0ZW5lcklkfSUyMiU3RDwjZWxzZT5wYXJ0bmVyX2RldmljZV9pZD0ke3JlcXVlc3QubGlzdGVuZXJJZCF9PC8jaWY-"
		height="0"
		width="0"
		style="display: none; visibility: hidden;"
	/>
{/if}

<!--Start of Tawk.to Script-->
{@html `
	<script type="text/javascript">
		var Tawk_API = Tawk_API || {},
			Tawk_LoadStart = new Date();
		(function () {
			var s1 = document.createElement('script'),
				s0 = document.getElementsByTagName('script')[0];
			s1.async = true;
			s1.src = 'https://embed.tawk.to/${PUBLIC_TWAK_ID}/${PUBLIC_TWAK_WIDGET_ID}';
			s1.charset = 'UTF-8';
			s1.setAttribute('crossorigin', '*');
			s0.parentNode.insertBefore(s1, s0);
		})();
	</script>
	`}
<!--End of Tawk.to Script-->

<!-- {@html `
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68e6716d7651d7194ef43c8c/1j722m53v';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
`} -->
