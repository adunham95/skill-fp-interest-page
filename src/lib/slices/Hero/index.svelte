<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
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
</section>
