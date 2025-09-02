<script lang="ts">
	import SocialSheet from '$lib/Components/SocialSheet.svelte';
	import '../app.css';
	import '../button-variants.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import { onMount } from 'svelte';
	import Banner from '$lib/Components/Banner.svelte';

	let mobileNabOpen = $state(false);
	let enableSignIn = $state(false);

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		enableSignIn = urlParams.get('alphaSignIn')?.toString() === 'true';
	});

	let { children, data } = $props();
</script>

<Banner banner={data.banner} />

<header class="bg-background">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 flex items-center p-1.5">
				<img class="h-8 w-auto" src="/logo-brand.svg" alt="Career Fingerprint Logo" />
				<span class="ml-2 text-2xl">Career Fingerprint</span>
			</a>
		</div>
		{#if enableSignIn}
			<div class="flex md:hidden">
				<button
					type="button"
					onclick={() => (mobileNabOpen = !mobileNabOpen)}
					class="text-content-2 hover:bg-content-2 hover:text-content-3 focus:ring-primary relative inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open menu</span>
					<!--
					Icon when menu is closed.
					
					Menu open: "hidden", Menu closed: "block"
					-->
					<svg
						class={`${mobileNabOpen ? 'hidden' : 'block'} size-6`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
					Icon when menu is open.
					
					Menu open: "block", Menu closed: "hidden"
            -->
					<svg
						class={`${mobileNabOpen ? 'block' : 'hidden'} size-6`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		{/if}
		<div class="hidden lg:flex lg:gap-x-12"></div>
		<div class="hidden items-center md:flex md:flex-1 md:flex-row md:justify-end">
			{#if enableSignIn}
				<a
					href="https://careerfingerprint.app/get-started"
					class="mr-2 text-sm/6 font-semibold text-gray-900">Get started</a
				>
				<div class=" h-[1.5rem] w-0.5 bg-gray-900"></div>
				<a
					href="https://careerfingerprint.app/dashboard"
					class="ml-2 text-sm/6 font-semibold text-gray-900"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			{/if}
		</div>
	</nav>

	<div class={`lg:hidden  ${mobileNabOpen ? 'block' : 'hidden'}`}>
		<!--
          Mobile menu overlay, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100"
            To: "opacity-0"
        -->
		<div class="fixed inset-0 z-20 bg-black/25" aria-hidden="true"></div>

		<!--
          Mobile menu, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
		<div
			class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
		>
			<div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
				<div class="pt-3 pb-2">
					<div class="flex items-center justify-between px-4">
						<div class="flex justify-center">
							<img class="h-8 w-auto" src="/logo-brand.svg" alt="Career Fingerprint Logo" />
							<span class="ml-2 text-2xl">Career Fingerprint</span>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="focus:ring-primaryfocus:outline-none relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset"
							>
								<span class="absolute -inset-0.5"></span>
								<span class="sr-only">Close menu</span>
								<svg
									class="size-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-3 space-y-1 px-2">
						{#if enableSignIn}
							<a
								href="https://careerfingerprint.app/get-started"
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
							>
								Get Started
							</a>
							<a
								href="https://careerfingerprint.app/dashboard"
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
							>
								Login
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

{@render children()}
<PrismicPreview {repositoryName} />

<footer class="bg-secondary">
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<div class="text-background flex items-center">
					<img class="h-9" src="/logo-brand.svg" alt="Career Fingerprint Logo" />
					<span class="ml-2 text-2xl">Career Fingerprint</span>
				</div>
				<p class="text-sm/6 text-balance text-gray-400">
					A smart system for tracking your career, wins, and next big move
				</p>
				<SocialSheet />
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm/6 font-semibold text-white">Solutions</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/use-cases#current" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Current Professionals</a
								>
							</li>
							<li>
								<a href="/use-cases#students" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Students & Recent Grads</a
								>
							</li>
							<li>
								<a href="/use-cases#searchers" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Switching Careers</a
								>
							</li>
							<!-- <li>
								<a href="/use-cases" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Educators (coming soon)</a
								>
							</li>
							<li>
								<a href="/use-cases" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Education Institutions(coming soon)</a
								>
							</li> -->
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<!-- <h3 class="text-sm/6 font-semibold text-white">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm/6 text-gray-400 hover:text-gray-300">Submit ticket</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-400 hover:text-gray-300">Documentation</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-400 hover:text-gray-300">Guides</a>
							</li>
						</ul> -->
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm/6 font-semibold text-white">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/about-us" class="text-sm/6 text-gray-400 hover:text-gray-300">About</a>
							</li>
							<!-- <li>
								<a href="#" class="text-sm/6 text-gray-400 hover:text-gray-300">Blog</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-400 hover:text-gray-300">Jobs</a>
							</li> -->
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm/6 font-semibold text-white">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/terms" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Terms of service</a
								>
							</li>
							<li>
								<a href="/privacy" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Privacy policy</a
								>
							</li>
							<!-- <li>
								<a href="#" class="text-sm/6 text-gray-400 hover:text-gray-300">License</a>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-sm/6 text-gray-400">
				&copy; {new Date().getFullYear()} Career Fingerprint LLC. All rights reserved.
			</p>
		</div>
	</div>
</footer>
