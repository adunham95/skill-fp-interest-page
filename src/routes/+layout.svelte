<script>
	import '../app.css';
	import '../button-variants.css';

	import { onMount } from 'svelte';

	onMount(async () => {
		await import('@tailwindplus/elements');
	});

	let { children, data } = $props();
</script>

{@render children()}
