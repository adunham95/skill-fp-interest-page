<script lang="ts">
	import ColorCard from '$lib/Components/ColorCard.svelte';
	import FontSample from '$lib/Components/FontSample.svelte';
	import PageContainer from '$lib/Components/PageContainer.svelte';
	import Seo from '$lib/Components/SEO.svelte';
</script>

<Seo pageName="Brand Guidelines" />

<PageContainer className="text-base">
	<section class="pb-32">
		<h2 class="font-title text-1">Logos</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="md:col-span-3">
				<p class="text-5">Primary Logo</p>
				<a href="/logo-brand.svg" download class="flex justify-center py-2">
					<img src="/logo-brand.svg" alt="Brand Logo" />
				</a>
			</div>
			<div class="">
				<p class="text-5">Secondary Logo</p>
				<a href="/logo-secondary.svg" download class="flex justify-center py-2">
					<img src="/logo-secondary.svg" alt="Secondary Brand Logo" class=" max-w-48" />
				</a>
			</div>
			<div class="">
				<p class="text-5">Accent Logo</p>
				<a href="/logo-accent.svg" download class="flex justify-center py-2">
					<img src="/logo-accent.svg" alt="Secondary Brand Logo" class=" max-w-48" />
				</a>
			</div>
			<div class="">
				<p class="text-5">Light Logo</p>
				<a href="/logo-light.svg" download class="flex justify-center bg-black py-2">
					<img src="/logo-light.svg" alt="Secondary Brand Logo" class=" max-w-48" />
				</a>
			</div>
			<div class="">
				<p class="text-5">Dark Logo</p>
				<a href="/logo-dark.svg" download class="flex justify-center py-2">
					<img src="/logo-dark.svg" alt="Secondary Brand Logo" class=" max-w-48" />
				</a>
			</div>
		</div>
	</section>
	<div class="relative">
		<div aria-hidden="true" class="absolute inset-0 flex items-center">
			<div class="w-full border-t border-gray-300"></div>
		</div>
	</div>
	<section class="py-32">
		<h2 class="font-title text-1 pb-5">Colors</h2>
		<p class="text-5 pb-5">
			Our primary color is Heatstroke. It is supported by Blue Opal, Verditer, Cool December.
		</p>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<ColorCard
				name="Heatstroke"
				type="Primary"
				hex="#ff7a8a"
				rgb="255, 122, 138"
				cmyk="0, 52, 46, 0"
				shades={[
					'bg-primary-950',
					'bg-primary-900',
					'bg-primary-800',
					'bg-primary-700',
					'bg-primary-600'
				]}
				tints={[
					'bg-primary-400',
					'bg-primary-300',
					'bg-primary-200',
					'bg-primary-100',
					'bg-primary-50'
				]}
			/>
			<ColorCard
				name="Blue Opal"
				type="Secondary"
				hex="#113a5d"
				rgb="17, 58, 93"
				cmyk="82, 38, 0, 64"
				shades={[
					'bg-secondary-950',
					'bg-secondary-900',
					'bg-secondary-800',
					'bg-secondary-700',
					'bg-secondary-600'
				]}
				tints={[
					'bg-secondary-400',
					'bg-secondary-300',
					'bg-secondary-200',
					'bg-secondary-100',
					'bg-secondary-50'
				]}
			/>
			<ColorCard
				name="Verditer"
				type="Accent"
				hex="#00bfa6"
				rgb="0, 191, 166"
				cmyk="100, 0, 13, 25"
				shades={[
					'bg-accent-950',
					'bg-accent-900',
					'bg-accent-800',
					'bg-accent-700',
					'bg-accent-600'
				]}
				tints={['bg-accent-400', 'bg-accent-300', 'bg-accent-200', 'bg-accent-100', 'bg-accent-50']}
			/>
			<ColorCard
				name="Cool December"
				type="Surface"
				hex="#fdfaf9"
				rgb="253, 250, 249"
				cmyk="0, 1, 2, 1"
				shades={[
					'bg-surface-400',
					'bg-surface-300',
					'bg-surface-200',
					'bg-surface-100',
					'bg-surface-50'
				]}
				tints={[]}
			/>
		</div>
	</section>
	<div class="relative">
		<div aria-hidden="true" class="bg-sr absolute inset-0 flex items-center">
			<div class="w-full border-t border-gray-300"></div>
		</div>
	</div>
	<section class="py-32">
		<h2 class="font-title text-1 pb-5">Fonts</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<FontSample fontClass="font-title" fontName="Libre Baskerville Regular" />
			<FontSample fontClass="font-paragraph" fontName="Josefin Sans" />
		</div>
	</section>
	<div class="relative">
		<div aria-hidden="true" class="absolute inset-0 flex items-center">
			<div class="w-full border-t border-gray-300"></div>
		</div>
	</div>
	<section class="py-32">
		<h2 class="font-title text-1 pb-5">Typographic Scale</h2>
		<p class="text-5 pb-5">
			Our typographic scale is built on the Major third ratio, which has a scale factor of 1.250. It
			ensures our text will look harmonious and avoids scenarios where it's hard to tell our
			headings apart.
		</p>
		<div class="space-y-4">
			<div>
				<p class="text-sm text-gray-600">h1 3.05em (48.828px)</p>
				<h1 class="text-1 font-normal">Lorem ipsum</h1>
			</div>

			<div>
				<p class="text-sm text-gray-600">h2 2.44em (39.063px)</p>
				<h2 class="text-2 font-normal">Lorem ipsum dolor</h2>
			</div>

			<div>
				<p class="text-sm text-gray-600">h3 1.95em (31.25px)</p>
				<h3 class="text-3 font-normal">Lorem ipsum dolor sit amet</h3>
			</div>

			<div>
				<p class="text-sm text-gray-600">h4 1.56em (25px)</p>
				<h4 class="text-4 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
			</div>

			<div>
				<p class="text-sm text-gray-600">h5 1.25em (20px)</p>
				<h5 class="text-4 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
			</div>

			<div>
				<p class="text-sm text-gray-600">Body text 1em (16px)</p>
				<p class="text-base font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
			</div>

			<div>
				<p class="text-sm text-gray-600">Caption text 0.8em (12.8px)</p>
				<p class=" text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
			</div>

			<div>
				<p class="text-sm text-gray-600">Small print 0.64em (10.24px)</p>
				<p class="text-small-text text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing
				</p>
			</div>
		</div>
	</section>
	<div class="relative">
		<div aria-hidden="true" class="absolute inset-0 flex items-center">
			<div class="w-full border-t border-gray-300"></div>
		</div>
	</div>
	<section class="py-32">
		<h2 class="font-title text-1 pb-5">Photos Assets</h2>
		<p class="text-5 pb-5">This is a set of pre-made assets to use</p>
		<div class="grid grid-cols-3 gap-2">
			<a href="/assets/dashboard-on-laptop.png">
				<img src="/assets/dashboard-on-laptop.png" alt="Dashboard on laptop" class="object-cover" />
			</a>
			<a href="/assets/sign-in-screenshot.png">
				<img src="/assets/sign-in-screenshot.png" alt="Sing in screenshot" class="object-cover" />
			</a>
		</div>
	</section>
</PageContainer>
