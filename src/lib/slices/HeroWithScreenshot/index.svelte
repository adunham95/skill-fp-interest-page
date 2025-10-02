<script lang="ts">
	import Button from '$lib/Components/Button.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroWithScreenshotSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative isolate pt-14">
		<div class="pb-24 lg:pb-40">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl text-center">
					<h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
						{slice.primary.title}
					</h1>
					<div class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
						<PrismicRichText field={slice.primary.description} />
					</div>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						{#each slice.primary.ctas as link, idx}
							<Button {...link} index={idx} />
						{/each}
					</div>
				</div>

				<PrismicImage
					field={slice.primary.screenshot}
					class="mt-16 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 sm:mt-24"
				/>
			</div>
		</div>
	</div>
</section>
