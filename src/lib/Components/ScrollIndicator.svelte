<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = $state(true);

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY < 50; // hide once scrolled ~50px
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if visible}
	<div
		class="scroll-indicator bg-primary border-secondary"
		aria-label="Scroll"
		transition:fade={{ duration: 400 }}
	>
		<div class="arrow"></div>
	</div>
{/if}

<style>
	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;
		animation: bounce 2s infinite;
		opacity: 0.8;
		/* background-color: green; */
		border-radius: 100%;
		z-index: 50;
		padding: 10px;
		border: 2px solid;
	}

	.scroll-indicator:hover {
		opacity: 1;
	}

	.arrow {
		width: 15px;
		height: 15px;
		border-left: 3px solid white;
		border-bottom: 3px solid white;
		transform: translateY(-4px) rotate(-45deg);
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translate(-50%, 0);
		}
		40% {
			transform: translate(-50%, 10px);
		}
		60% {
			transform: translate(-50%, 5px);
		}
	}
</style>
