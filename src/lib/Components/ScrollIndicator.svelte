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
	<div class="scroll-wrapper">
		<div
			class="scroll-indicator bg-primary border-secondary"
			aria-label="Scroll"
			transition:fade={{ duration: 400 }}
		>
			<div class="arrow"></div>
		</div>
	</div>
{/if}

<style>
	.scroll-wrapper {
		position: sticky;
		bottom: 2rem;
		display: flex;
		justify-content: center;
		z-index: 50;
	}
	.scroll-indicator {
		animation: bounce 2s infinite;
		opacity: 0.8;
		border-radius: 100%;
		padding: 10px;
		border: 2px solid;
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
