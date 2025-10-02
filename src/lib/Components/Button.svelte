<script lang="ts">
	import type { LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	type Props = LinkField & {
		index?: number;
	};

	const { variant, index = 0, ...field }: Props = $props();

	let className = $derived.by(() => {
		switch (variant) {
			case 'Secondary':
				if (index > 0) {
					return 'btn-text--secondary';
				}
				return 'btn--secondary';
			case 'Accent':
				if (index > 0) {
					return 'btn-text--accent';
				}
				return 'btn--accent';

			default:
				if (index > 0) {
					return 'btn-text--accent';
				}
				return 'btn--primary';
		}
	});
</script>

<PrismicLink {field} class={`btn ${className}`} />
