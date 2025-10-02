<script lang="ts">
	import { PrismicEmbed, PrismicImage, PrismicRichText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import type { PageProps } from './$types';
	import Seo from '$lib/Components/SEO.svelte';
	import Button from '$lib/Components/Button.svelte';

	const { data }: PageProps = $props();
</script>

<Seo
	meta_image={data.page.data.meta_image}
	pageName={data.page.data.meta_title?.toString()}
	meta_description={data.page.data.meta_description?.toString()}
/>

<div class="relative isolate pt-14">
	<div class="pb-24 lg:pb-40">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
					{data.page.data.feature_name}
				</h1>
				<div class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
					<PrismicRichText field={data.page.data.feature_description} />
				</div>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					{#each data.page.data.ctas as link, idx}
						<Button {...link} index={idx} />
					{/each}
				</div>
			</div>

			{#if data.page.data.screen_shot}
				<PrismicImage
					field={data.page.data.screen_shot}
					class="mt-16 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 sm:mt-24"
				/>
			{/if}

			{#if data.page.data.video_embed}
				<div class="relative mt-16 aspect-16/9 sm:h-auto">
					<div class="video-container">
						<PrismicEmbed field={data.page.data.video_embed} />
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<SliceZone slices={data.page.data.slices} {components} />
