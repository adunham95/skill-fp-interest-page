<script lang="ts">
	import type { LinkField } from '@prismicio/client';
	import Button from './Button.svelte';

	type Props = {
		buttons?: LinkField[];
	};

	const { buttons }: Props = $props();
</script>

<div class="flex items-center justify-start gap-x-2">
	{#each buttons as link, idx}
		<Button {...link} index={idx} />
	{/each}
</div>
