<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.UseCaseSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="flex min-h-screen flex-col justify-center bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
			>
				<div class="col-span-2">
					<h2 class="text-primary text-base/7 font-semibold">{slice.primary.section_label}</h2>
					<div
						class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
					>
						<PrismicRichText field={slice.primary.title} />
					</div>
				</div>
				<dl class="col-span-3 grid grid-cols-1 gap-8 sm:grid-cols-2">
					<div>
						<dt class="text-base/7 font-semibold text-gray-900">{slice.primary.problem_title}</dt>
						<dd class="font-body mt-1 text-base/7 text-gray-600">
							<PrismicRichText field={slice.primary.problem_description} />
						</dd>
					</div>
					<div>
						<dt class="text-base/7 font-semibold text-gray-900">
							{slice.primary.solution_title}
						</dt>
						<dd class="font-body mt-1 text-base/7 text-gray-600">
							<PrismicRichText field={slice.primary.solution_description} />
						</dd>
					</div>
					{#if slice.primary.testimonial.length === 1}
						<figure class="mt-16 border-l border-gray-200 pl-8 text-gray-700 sm:col-span-2">
							<blockquote class="text-base/7">
								<PrismicRichText field={slice.primary.testimonial} />
							</blockquote>
							<figcaption class="mt-6 flex gap-x-4 text-sm/6">
								<div>
									{#if slice.primary.testimonial_name}
										<span class="font-semibold text-gray-900">{slice.primary.testimonial_name}</span
										>
									{/if}
									{#if slice.primary.testimonial_job_title}
										–
										<span class="text-gray-600">{slice.primary.testimonial_job_title}</span>
									{/if}
								</div>
							</figcaption>
						</figure>
					{/if}
					<div class="mt-10 flex items-center justify-end gap-x-6 sm:col-span-2">
						{#if slice.primary.primary_cta?.text}
							<PrismicLink field={slice.primary.primary_cta} class="btn btn--primary" />
						{/if}
						{#if slice.primary.secondary_cta?.text}
							<PrismicLink field={slice.primary.secondary_cta} class="btn btn-text--secondary" />
						{/if}
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>
