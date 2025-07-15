<script lang="ts">
	import SocialSheet from '$lib/Components/SocialSheet.svelte';
	import '../app.css';
	import '../button-variants.css';

	let { children } = $props();
</script>

<header class="bg-background">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 flex items-center p-1.5">
				<img class="h-8 w-auto" src="/logo-brand.svg" alt="Career Fingerprint Logo" />
				<span class="ml-2 text-2xl">Career Fingerprint</span>
			</a>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
</header>

{@render children()}

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
							<li>
								<a href="/use-cases" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Educators (coming soon)</a
								>
							</li>
							<li>
								<a href="/use-cases" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Education Institutions(coming soon)</a
								>
							</li>
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
								<a href="/about" class="text-sm/6 text-gray-400 hover:text-gray-300">About</a>
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
							<!-- <li>
								<a href="/terms-of-service" class="text-sm/6 text-gray-400 hover:text-gray-300"
									>Terms of service</a
								>
							</li> -->
							<li>
								<a href="/privacy-policy" class="text-sm/6 text-gray-400 hover:text-gray-300"
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
