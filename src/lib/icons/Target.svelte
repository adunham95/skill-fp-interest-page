<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	let props: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
	{...props}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<circle cx="12" cy="12" r="9" />
	<circle cx="12" cy="12" r="5" />
	<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
	<path d="M12 3V2" />
	<path d="M12 22v-1" />
	<path d="M3 12H2" />
	<path d="M22 12h-1" />
</svg>
