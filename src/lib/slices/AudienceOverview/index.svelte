<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.AudienceOverviewSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-background py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-primary text-base/7 font-semibold">{slice.primary.preheading}</h2>
				<p
					class="font-title mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
				>
					{slice.primary.section_title}
				</p>
				<div class="mt-6 text-lg/8 text-gray-600">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					{#each slice.primary.audience_types as item}
						<!-- Render content for item -->

						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
								<PrismicImage class="text-primary size-5 flex-none" field={item.icon} />

								{item.label}
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
								<PrismicRichText field={item.audience_description} />
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>
