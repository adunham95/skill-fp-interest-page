<script lang="ts">
	import confetti from 'canvas-confetti';
	import { fade, scale } from 'svelte/transition';

	let open = false;
	let showButton = true;
	let currentNumber: number | null = null;

	async function goLive() {
		showButton = false;

		// Countdown 5 → 1
		// Countdown 5 → 1
		for (let i = 5; i > 0; i--) {
			currentNumber = i;
			await new Promise((resolve) => setTimeout(resolve, 950)); // wait 1s per number
			currentNumber = null; // remove number before next one
			await new Promise((resolve) => setTimeout(resolve, 50)); // wait 1s per number
		}

		// Open curtains + confetti
		open = true;
		launchConfetti();
	}

	function launchConfetti() {
		const duration = 1500;
		const end = Date.now() + duration;

		(function frame() {
			confetti({
				particleCount: 6,
				angle: 60,
				spread: 55,
				origin: { x: 0 }
			});
			confetti({
				particleCount: 6,
				angle: 120,
				spread: 55,
				origin: { x: 1 }
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		})();
	}
</script>

<!-- Curtains -->
<div
	class="from-secondary-500 to-secondary-600 fixed top-0 left-0 z-50 h-screen w-1/2 bg-gradient-to-r transition-transform duration-[2000ms] ease-in-out"
	class:!-translate-x-full={open}
></div>

<div
	class="from-secondary-500 to-secondary-600 fixed top-0 right-0 z-50 h-screen w-1/2 bg-gradient-to-l transition-transform duration-[2000ms] ease-in-out"
	class:translate-x-full={open}
></div>

<!-- Launch Button -->
{#if showButton}
	<div class="fixed inset-0 z-[60] flex flex-col items-center justify-center text-white">
		<button
			on:click={goLive}
			class="relative flex h-64 w-64 animate-pulse items-center justify-center
		       rounded-full bg-gradient-to-b from-orange-800 to-orange-600 text-4xl font-extrabold text-black
		       uppercase
		       shadow-[0_8px_0_0_rgba(0,0,0,0.6),0_12px_20px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-105 active:translate-y-1
		       active:shadow-[0_4px_0_0_rgba(0,0,0,0.6),0_8px_12px_rgba(0,0,0,0.3)]"
		>
			GO LIVE
			<!-- Neon glow ring -->
			<span
				class="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,255,0,0.7)]"
			></span>
		</button>
	</div>
{/if}

<!-- Countdown -->
{#if currentNumber !== null}
	<div class="fixed inset-0 z-[70] flex items-center justify-center font-extrabold text-white">
		<span
			class="pulse-scale text-[10rem]"
			in:scale={{ start: 0.5, duration: 800 }}
			out:fade={{ duration: 400 }}
		>
			{currentNumber}
		</span>
	</div>
{/if}

<style>
	@keyframes pulse-scale {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}
	.pulse-scale {
		animation: pulse-scale 1s ease-in-out infinite;
	}
</style>
