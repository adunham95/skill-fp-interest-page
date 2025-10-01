<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = $state(true);
	let ignoreScroll = $state(false);
	let slices = $state<any[]>([]);

	onMount(() => {
		slices = Array.from(document.querySelectorAll('[data-slice-type]'));
		// Prismic renders slices inside [data-slice-zone]
		// and each slice wrapper has [data-slice-type]
		const handleScroll = () => {
			if (ignoreScroll) return; // ignore programmatic scrolls
			visible = window.scrollY < 50; // hide once scrolled ~50px
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToNext() {
		const scrollY = window.scrollY;

		for (const slice of slices) {
			const top = slice.getBoundingClientRect().top + window.scrollY;

			if (top > scrollY + 10) {
				ignoreScroll = true;

				window.scrollTo({
					top,
					behavior: 'smooth'
				});

				// after smooth scroll ends (~600ms), re-enable scroll detection
				setTimeout(() => {
					ignoreScroll = false;
				}, 700);

				break;
			}
		}
	}
</script>

{#if visible}
	<div class="scroll-wrapper">
		<button
			onclick={scrollToNext}
			class="scroll-indicator bg-primary border-secondary cursor-pointer"
			aria-label="Scroll"
			transition:fade={{ duration: 400 }}
		>
			<div class="arrow"></div>
		</button>
	</div>
{/if}

<style>
	.scroll-wrapper {
		position: fixed;
		bottom: 2rem;
		display: flex;
		justify-content: center;
		z-index: 50;
		width: 100%;
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
