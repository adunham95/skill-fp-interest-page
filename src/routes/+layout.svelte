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

{#if process.env.NODE_ENV !== 'production'}
	<!-- By using this audio pixel code, the Customer hereby instructs AudioGO toProcess Personal Data in its quality as a sub-processor. The ownership and control of Personal Data remains with Customer, and Customer will always remain the Data Controller. Customer is responsible for compliance with its obligations as Data Controller under the Data Protection Laws, in particular for justification of any transmission of Personal Data to AudioGO (including but not limited providing any required notices and obtaining any required consents from the data subjects), and for its decisions concerning the Processing and use of the Personal Data. --><img
		src="https://us-41605-adswizz.attribution.adswizz.com/fire?pixelId=6105c760-11db-4581-aa69-5c1ad9ab36fc&type=sitevisit&subtype=HomePage&aw_0_req.gdpr=true&redirectURL=aHR0cHM6Ly9waXhlbC50YXBhZC5jb20vaWRzeW5jL2V4L3JlY2VpdmU_cGFydG5lcl9pZD0yOTk0JjwjaWYgcmVxdWVzdC5saXN0ZW5lcklkP21hdGNoZXMoJ1swLTlhLWZdezh9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezEyfScpPnBhcnRuZXJfdHlwZWRfZGlkPSU3QiUyMkhBUkRXQVJFX0FORFJPSURfQURfSUQlMjIlM0ElMjIke3JlcXVlc3QubGlzdGVuZXJJZH0lMjIlN0Q8I2Vsc2VpZiByZXF1ZXN0Lmxpc3RlbmVySWQ_bWF0Y2hlcygnWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9Jyk-cGFydG5lcl90eXBlZF9kaWQ9JTdCJTIySEFSRFdBUkVfSURGQSUyMiUzQSUyMiR7cmVxdWVzdC5saXN0ZW5lcklkfSUyMiU3RDwjZWxzZT5wYXJ0bmVyX2RldmljZV9pZD0ke3JlcXVlc3QubGlzdGVuZXJJZCF9PC8jaWY-"
		height="0"
		width="0"
		style="display: none; visibility: hidden;"
	/>
{/if}
