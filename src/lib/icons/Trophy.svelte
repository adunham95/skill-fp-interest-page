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
	<path d="M8 4h8v4a4 4 0 0 1-8 0z" />
	<path d="M10 16h4" />
	<path d="M12 12v4" />
	<path d="M8 20h8" />
	<path d="M16 6h3a0 0 0 0 1 0 0v1a4 4 0 0 1-4 4h-1" />
	<path d="M8 6H5a0 0 0 0 0 0 0v1a4 4 0 0 0 4 4h1" />
</svg>
