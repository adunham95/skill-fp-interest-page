<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.GradientCtaSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative isolate overflow-hidden bg-white">
		<div class="px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
					{slice.primary.title}
				</h2>
				<div class="font-body mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
					<PrismicRichText field={slice.primary.description} />
				</div>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<PrismicLink field={slice.primary.primary_cta} class="btn btn--primary" />
					{#if slice.primary.secondary_cta.text}
						<PrismicLink field={slice.primary.secondary_cta} class="btn btn-text--secondary" />
					{/if}
				</div>
			</div>
		</div>
		<svg
			viewBox="0 0 1024 1024"
			aria-hidden="true"
			class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
		>
			<circle
				r="512"
				cx="512"
				cy="512"
				fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
				fill-opacity="0.7"
			/>
			<defs>
				<radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
					<stop stop-color={slice.primary.gradient_start} />
					<stop offset="1" stop-color={slice.primary.gradient_stop} />
				</radialGradient>
			</defs>
		</svg>
	</div>
</section>
