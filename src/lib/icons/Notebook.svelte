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
	<rect x="5" y="3" width="14" height="18" rx="2" />
	<path d="M9 3v18" />
	<path d="M12 8h4" />
	<path d="M12 12h4" />
	<path d="M12 16h3" />
	<path d="M7 7h1" />
	<path d="M7 11h1" />
	<path d="M7 15h1" />
</svg>
