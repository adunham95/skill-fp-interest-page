<script lang="ts">
	import type {
		BooleanField,
		GroupField,
		ImageField,
		ImageFieldImage,
		KeyTextField,
		LinkField
	} from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	interface Props {
		app_name: KeyTextField;
		logo?: ImageField;
		tagline?: KeyTextField;
		nav_menu?: GroupField<{
			label: KeyTextField;
			url: LinkField;
		}>;
		cta_text?: KeyTextField;
		cta_url?: LinkField;
		enable_sign_in?: BooleanField;
	}

	const {
		app_name = 'Career Fingerprint',
		logo,
		tagline,
		nav_menu = [],
		cta_text,
		cta_url,
		enable_sign_in = false
	}: Props = $props();

	let mobileNabOpen = $state(false);
</script>

<header class="bg-background">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 flex items-center p-1.5">
				<PrismicImage field={logo} class="h-10 w-auto" />
				<span class="ml-2">
					<div>
						<p class="p-0 text-2xl">
							{app_name}
						</p>
						{#if tagline}
							<p class="p-0 text-xs italic">
								{tagline}
							</p>
						{/if}
					</div>
				</span>
			</a>
		</div>
		{#if enable_sign_in}
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
		<div class="hidden lg:flex lg:gap-x-12">
			{#each nav_menu as nav}
				<PrismicLink field={nav.url} class="text-sm/6 font-semibold text-gray-900"
					>{nav.label}</PrismicLink
				>
			{/each}
		</div>
		<div class="hidden items-center md:flex md:flex-1 md:flex-row md:justify-end">
			{#if enable_sign_in}
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
						{#if enable_sign_in}
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
						{#each nav_menu as nav}
							<PrismicLink
								field={nav.url}
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
							>
								{nav.label}
							</PrismicLink>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
