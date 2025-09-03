<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {
		PrismicImage,
		PrismicLink,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroOverBackgroundImageSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative isolate overflow-hidden pt-14">
		<!-- <img
			src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"
			alt=""
			class="absolute inset-0 -z-10 size-full object-cover opacity-10"
		/> -->
		<PrismicImage
			field={slice.primary.backgroundimage}
			class="absolute inset-0 -z-10 size-full object-cover opacity-10"
		/>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				{#if slice.primary.tag}
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							{slice.primary.tag}
							<PrismicLink field={slice.primary.tagcta} class="text-primary font-semibold" />
						</div>
					</div>
				{/if}
				<div class="text-center">
					<h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
						{slice.primary.hero_text}
					</h1>
					<div class="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
						<PrismicRichText field={slice.primary.subtext} />
					</div>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						{#if slice.primary.primary_click.text}
							<PrismicLink
								field={slice.primary.primary_click}
								class="bg-primary hover:bg-primary-700 focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
							/>
						{/if}
						<!-- <a href="#">Get started</a>
						<a href="#" class="text-sm/6 font-semibold text-gray-900"
							>Learn more <span aria-hidden="true">→</span></a
						> -->
					</div>
				</div>
			</div>
		</div>
		<div
			aria-hidden="true"
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
		>
			<div
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
			></div>
		</div>
	</div>
</section>
