<script lang="ts">
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import Banner from '$lib/Components/Banner.svelte';
	import Header from '$lib/Components/Header/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import ScrollIndicator from '$lib/Components/ScrollIndicator.svelte';
	import {
		PUBLIC_MITA_ID,
		PUBLIC_MIXPANEL_TOKEN,
		PUBLIC_TWAK_ID,
		PUBLIC_TWAK_WIDGET_ID,
		PUBLIC_CLARITY_ID,
		PUBLIC_GTM_ID
	} from '$env/static/public';
	import mixpanel from 'mixpanel-browser';
	import MpTargetHighlighter from '$lib/Components/MpTargetHighlighter.svelte';
	import { page } from '$app/state';

	const show = $derived(page.url.searchParams.get('showMixPanelDevTools') === 'true');

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

	console.log(data.header?.data);
</script>

<svelte:head>
	{#if PUBLIC_GTM_ID}
		{@html `
		<script>
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', '${PUBLIC_GTM_ID}');
		</script>
		<!-- End Google Tag Manager -->
	`}
	{/if}

	{#if PUBLIC_CLARITY_ID}
		{@html `<script>
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${PUBLIC_CLARITY_ID}");
        </script>`}
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

{#if show}
	<MpTargetHighlighter />
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

{#if PUBLIC_GTM_ID}
	<!-- Google Tag Manager (noscript) -->
	<noscript
		><iframe
			src={`https://www.googletagmanager.com/ns.html?id=${PUBLIC_GTM_ID}`}
			height="0"
			width="0"
			style="display:none;visibility:hidden"
		></iframe></noscript
	>
	<!-- End Google Tag Manager (noscript) -->
{/if}
