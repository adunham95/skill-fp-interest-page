<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FeatureScreenshotSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.variation === 'dark'}
		<div class="bg-secondary overflow-hidden py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="max-w-2xl">
					<h2 class="text-primary text-base/7 font-semibold">{slice.primary.section_label}</h2>
					<p
						class="mt-2 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-6xl sm:text-balance"
					>
						{slice.primary.title}
					</p>
				</div>

				<div
					class="relative mt-16 aspect-2432/1442 h-144 sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]"
				>
					<div
						class="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] bg-white/2.5 shadow-xs ring-1 ring-white/5"
					></div>

					<PrismicImage
						field={slice.primary.screenshot}
						class="h-full rounded-xl shadow-2xl ring-1 ring-white/10"
					/>
				</div>
			</div>
		</div>
	{:else}
		<div class="bg-background overflow-hidden py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="max-w-2xl">
					<h2 class="text-primary text-base/7 font-semibold">{slice.primary.section_label}</h2>
					<p
						class="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance"
					>
						{slice.primary.title}
					</p>
				</div>
				<div
					class="relative mt-16 aspect-2432/1442 h-144 sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]"
				>
					<div
						class="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] shadow-xs ring-1 ring-black/5"
					></div>
					<PrismicImage
						field={slice.primary.screenshot}
						class="h-full rounded-xl shadow-2xl ring-1 ring-black/10"
					/>
				</div>
			</div>
		</div>
	{/if}
</section>
