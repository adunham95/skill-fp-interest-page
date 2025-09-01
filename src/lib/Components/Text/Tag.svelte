<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<h2 class="text-primary text-base/7 font-semibold">{children()}</h2>
