<script lang="ts">
	import Button from '$lib/Components/Button.svelte';
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.VideoHeroSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative isolate pt-14">
		<div class="pb-8">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl text-center">
					<h1 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
						{slice.primary.hero_text}
					</h1>
					<p class="mt-6 text-base font-medium text-pretty text-gray-500 sm:text-xl">
						{slice.primary.hero_subtext}
					</p>
					<div class="mt-6 flex items-center justify-center gap-x-6">
						{#each slice.primary.ctas as link, idx}
							<Button {...link} index={idx} />
						{/each}
					</div>
				</div>
				{#if slice.primary.video.link_type === 'Media'}
					<video
						class="mt-8 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
						muted
						autoplay
						playsinline
						loop
						width="2432"
						height="1442"
						src={slice.primary.video.url}
					>
					</video>
				{/if}
			</div>
		</div>
	</div>
</section>
