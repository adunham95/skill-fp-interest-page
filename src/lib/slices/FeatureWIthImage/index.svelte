<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FeatureWIthImageSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.variation === 'dark'}
		<div class="bg-secondary overflow-hidden py-24 text-gray-50 sm:py-32">
			<div class="mx-auto max-w-7xl md:px-6 lg:px-8">
				<div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div class="px-6 lg:px-0 lg:pt-4 lg:pr-4">
						<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<h2 class="text-primary font-title text-base/7 font-semibold">
								{slice.primary.tag}
							</h2>
							<p
								class="font-paragraph mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-5xl"
							>
								{slice.primary.title}
							</p>
							<div class="font-body mt-6 text-lg/8 text-gray-100">
								<PrismicRichText field={slice.primary.description} />
							</div>

							<dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-50 lg:max-w-none">
								{#each slice.primary.features as item}
									<div class="relative pl-9">
										<dt class="inline font-semibold text-gray-50">
											<PrismicImage class="absolute top-1 left-1 size-5" field={item.icon} />
											{item.feature_title}
										</dt>
										<dd class="font-body inline"><PrismicRichText field={item.feature_desc} /></dd>
									</div>
								{/each}
							</dl>
						</div>
					</div>
					<div class="sm:px-6 lg:px-0">
						<div
							class="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none"
						>
							<div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
								<PrismicImage
									class="size-full object-cover object-top"
									field={slice.primary.image}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="bg-background overflow-hidden py-24 sm:py-32">
			<div class="mx-auto max-w-7xl md:px-6 lg:px-8">
				<div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div class="px-6 lg:px-0 lg:pt-4 lg:pr-4">
						<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<h2 class="text-primary text-base/7 font-semibold">{slice.primary.tag}</h2>
							<p
								class="font-title mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-700 sm:text-5xl"
							>
								{slice.primary.title}
							</p>
							<div class="mt-6 text-lg/8 text-gray-600">
								<PrismicRichText field={slice.primary.description} />
							</div>

							<dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								{#each slice.primary.features as item}
									<div class="relative pl-9">
										<dt class="inline font-semibold text-gray-800">
											<PrismicImage class="absolute top-1 left-1 size-5" field={item.icon} />
											{item.feature_title}
										</dt>
										<dd class="inline"><PrismicRichText field={item.feature_desc} /></dd>
									</div>
								{/each}
							</dl>
						</div>
					</div>
					<div class="sm:px-6 lg:px-0">
						<div
							class="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none"
						>
							<div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
								<PrismicImage
									class="size-full object-cover object-top"
									field={slice.primary.image}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>
