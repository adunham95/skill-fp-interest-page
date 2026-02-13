<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.variation === 'default'}
		<div class="relative">
			<div class="mx-auto max-w-7xl">
				<div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
					<svg
						class="fill-background absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="0,0 90,0 50,100 0,100" />
					</svg>

					<div class="relative px-6 pt-12 pb-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
						<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-[472px]">
							<h1
								class="font-title text-5xl leading-14 font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
							>
								{slice.primary.hero_text}
							</h1>
							<p class="font-body mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
								{slice.primary.hero_subtext}
							</p>
							<div class="mt-10 flex items-center gap-x-6">
								{#if slice.primary.primary_click?.text}
									<PrismicLink class="btn btn--primary" field={slice.primary.primary_click} />
								{/if}
								{#if slice.primary.secondary_click?.text}
									<PrismicLink
										class="btn btn-text--secondary"
										field={slice.primary.secondary_click}
									/>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class=" relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<PrismicImage
					class="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
					field={slice.primary.hero_image}
				/>
			</div>
		</div>
	{:else if slice.variation === 'offsetImage'}
		<div class="from-secondary-100/30 relative isolate overflow-hidden bg-linear-to-b pt-14">
			<div
				aria-hidden="true"
				class="bg-background absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
			></div>
			<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
				<div
					class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
				>
					<h1
						class="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto"
					>
						{slice.primary.hero_text}
					</h1>
					<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p class="font-body text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
							{slice.primary.hero_subtext}
						</p>
						<div class="mt-10 flex items-center gap-x-6">
							{#if slice.primary.primary_click?.text}
								<PrismicLink class="btn btn--primary" field={slice.primary.primary_click} />
							{/if}
							{#if slice.primary.secondary_click?.text}
								<PrismicLink
									class="btn btn-text--secondary"
									field={slice.primary.secondary_click}
								/>
							{/if}
						</div>
					</div>
					<PrismicImage
						class="mt-10 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
						field={slice.primary.hero_image}
					/>
				</div>
			</div>
			<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32"></div>
		</div>
	{:else if slice.variation == 'withPhoneScreenShot'}
		<div class="relative isolate md:pt-1">
			<div
				class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pt-15 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pt-20 lg:pb-40"
			>
				<div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<h1
						class=" mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
					>
						{slice.primary.hero_text}
					</h1>
					<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p class="font-body text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
							{slice.primary.hero_subtext}
						</p>
					</div>
					<div class="mt-10 flex items-center gap-x-6">
						{#if slice.primary.primary_click?.text}
							<PrismicLink class="btn btn--primary" field={slice.primary.primary_click} />
						{/if}
						{#if slice.primary.secondary_click?.text}
							<PrismicLink class="btn btn-text--secondary" field={slice.primary.secondary_click} />
						{/if}
					</div>
					<div class="pt-2 text-xs text-gray-400">
						{slice.primary.cta_attribute}
					</div>
				</div>
				<div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
					<svg role="img" viewBox="0 0 366 729" class="mx-auto w-91.5 max-w-full drop-shadow-xl">
						<title>App screenshot</title>
						<defs>
							<clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
								<rect width="316" height="684" rx="36" />
							</clipPath>
						</defs>
						<path
							d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
							fill="#4B5563"
						/>
						<path
							d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
							fill="#343E4E"
						/>
						<foreignObject
							width="316"
							height="684"
							clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
							transform="translate(24 24)"
						>
							<PrismicImage field={slice.primary.screenshot} />
						</foreignObject>
					</svg>
				</div>
			</div>
		</div>
	{/if}
</section>
