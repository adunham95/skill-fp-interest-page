<script lang="ts">
	import { ICONS, type IconKey } from '$lib/iconMap';

	interface Props {
		iconKey: IconKey;
		class?: string;
	}

	let { iconKey, class: className = '' }: Props = $props();
	const Icon = $derived(ICONS[iconKey]);
</script>

<Icon class={className} />
