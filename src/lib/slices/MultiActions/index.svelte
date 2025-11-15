<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.MultiActionsSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-primary text-base/7 font-semibold">{slice.primary.label}</h2>
				<p class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
					{slice.primary.title}
				</p>
				<div class="mt-2 text-lg/8 text-gray-600">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>
			<div
				class="auto-fit-250 mx-auto mt-10 grid max-w-2xl gap-x-4 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none"
			>
				{#each slice.primary.actionblock as block}
					<article
						class="hover:bg-secondary/10 flex max-w-xl flex-col items-start justify-between rounded-2xl p-4 transition-all duration-200"
					>
						<div class="group relative grow">
							<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
								<PrismicLink field={block.blocklink}>
									<span class="absolute inset-0"></span>
									{block.blocktitle}
								</PrismicLink>
							</h3>
							<div class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
								<PrismicRichText field={block.description} />
							</div>
							<div class="text-primary flex justify-end pt-2 text-sm">
								<p>{block.cta_text}</p>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
