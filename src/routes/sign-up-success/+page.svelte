<script>
	import Seo from '$lib/Components/SEO.svelte';
	import SocialSheet from '$lib/Components/SocialSheet.svelte';
</script>

<Seo pageName="Thank you" />

<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Thank you!</h2>
		<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
			You’ll be one of the first to know when we launch.
		</p>
		<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
			Follow Us On Social Media
		</p>
		<SocialSheet className="justify-center pt-8" color="text-gray-700 hover:text-gray-900" />
	</div>
</div>

<!-- <div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
			<p
				class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
			>
				Everything you need to deploy your app
			</p>
			<p class="mt-6 text-lg/8 text-gray-700">
				Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
				elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<div class="relative pl-16">
					<dt class="text-base/7 font-semibold text-gray-900">
						<div
							class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
						>
							<svg
								class="size-6 text-white"
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
									d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
								/>
							</svg>
						</div>
						Push to deploy
					</dt>
					<dd class="mt-2 text-base/7 text-gray-600">
						Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio
						urna massa nunc massa.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div> -->
