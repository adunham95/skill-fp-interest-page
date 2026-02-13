<!-- src/lib/slices/StepsSection.svelte -->
<script lang="ts">
	import { PrismicImage, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	type StepsSectionSlice = Content.StepsSectionSlice;

	type Props = {
		slice: StepsSectionSlice;
	};

	const { slice }: Props = $props();

	function hasText(v: unknown): v is string {
		return typeof v === 'string' && v.trim().length > 0;
	}
</script>

<section class="py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mx-auto max-w-2xl text-center">
			{#if hasText(slice.primary.eyebrow)}
				<p class="text-primary text-base/7 font-semibold">{slice.primary.eyebrow}</p>
			{/if}

			{#if hasText(slice.primary.title)}
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					{slice.primary.title}
				</h2>
			{/if}

			{#if slice.primary.description}
				<div class="mt-4 text-base leading-7 text-slate-600">
					<PrismicRichText field={slice.primary.description} />
				</div>
			{/if}
		</div>

		<!-- Steps -->
		<div class="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
			{#each slice.primary.steps as step, i (i)}
				{@const isEven = i % 2 === 0}
				<div
					class="grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 lg:grid-cols-12 lg:gap-10"
				>
					<!-- Text -->
					<div class={['lg:col-span-5', isEven ? 'lg:order-1' : 'lg:order-2'].join(' ')}>
						<div class="flex items-start gap-4">
							<div
								class="bg-secondary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
							>
								<span class="text-sm font-bold text-slate-800">{String(i + 1)}</span>
							</div>

							<div class="min-w-0">
								{#if hasText(step.title)}
									<h3 class="text-xl font-semibold text-slate-900">{step.title}</h3>
								{/if}

								{#if step.description}
									<div class="mt-2 text-base leading-7 text-slate-600">
										<PrismicRichText field={step.description} />
									</div>
								{/if}
							</div>
						</div>
					</div>

					<!-- Image -->
					<div class={['lg:col-span-7', isEven ? 'lg:order-2' : 'lg:order-1'].join(' ')}>
						{#if step.image?.url}
							<div class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
								<PrismicImage
									field={step.image}
									class="h-auto max-h-[500px] w-full object-cover"
									imgixParams={{ q: 80, auto: ['format', 'compress'] }}
								/>
							</div>
						{:else}
							<!-- Fallback so spacing stays consistent if no image -->
							<div
								class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center"
							>
								<p class="text-sm text-slate-500">Add an image for this step</p>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
