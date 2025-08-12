<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FaqGroupSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-secondary">
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
			<h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
				{slice.primary.title}
			</h2>
			<div class="font-body mt-6 max-w-2xl text-base/7 text-gray-200">
				<PrismicRichText field={slice.primary.intro} />
			</div>
			<div class="mt-20">
				<dl
					class="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:gap-x-10"
				>
					{#each slice.primary.faqs as item}
						<div>
							<dt class="text-base font-semibold text-white">
								<PrismicRichText field={item.question} />
							</dt>
							<dd class="font-body mt-2 text-sm text-white">
								<PrismicRichText field={item.answer} />
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>
