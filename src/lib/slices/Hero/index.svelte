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

					<div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
						<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-[472px]">
							<h1
								class="font-title text-5xl leading-14 font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
							>
								{slice.primary.hero_text}
							</h1>
							<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
								{slice.primary.hero_subtext}
							</p>
							{#if slice.primary.primary_click?.text}
								<div class="mt-10 flex items-center gap-x-6">
									<PrismicLink class="btn btn--primary" field={slice.primary.primary_click} />
								</div>
							{/if}
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
						<p class="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
							{slice.primary.hero_subtext}
						</p>
						{#if slice.primary.primary_click?.text}
							<div class="mt-10 flex items-center gap-x-6">
								<PrismicLink class="btn btn--primary" field={slice.primary.primary_click} />
							</div>
						{/if}
					</div>
					<PrismicImage
						class="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
						field={slice.primary.hero_image}
					/>
				</div>
			</div>
			<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32"></div>
		</div>
	{/if}
</section>
