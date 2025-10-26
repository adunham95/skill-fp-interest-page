<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.TeamOverviewSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class=" px-6 py-24 sm:py-32 lg:px-8 xl:mx-auto xl:max-w-7xl"
>
	<div class=" grid gap-20 py-24 sm:py-32 xl:grid-cols-3">
		<div class="max-w-xl">
			<h2
				class="font-title text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
			>
				{slice.primary.title}
			</h2>
			<p class="mt-6 text-lg/8 text-gray-600">{slice.primary.description}</p>
		</div>
		<ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
			{#each slice.primary.members as item}
				<li>
					{#if item.user_link}
						<PrismicLink field={item.user_link}>
							<div class="flex items-center gap-x-6">
								<PrismicImage class="size-16 rounded-full" field={item.avatar} />
								<div>
									<h3 class="text-lg font-semibold tracking-tight text-gray-900">
										{item.name}
									</h3>
									<p class="text-primary text-sm/6 font-semibold">{item.role}</p>
								</div>
							</div>
						</PrismicLink>
					{:else}
						<div class="flex items-center gap-x-6">
							<PrismicImage class="size-16 rounded-full" field={item.avatar} />
							<div>
								<h3 class="text-lg font-semibold tracking-tight text-gray-900">
									{item.name}
								</h3>
								<p class="text-primary text-sm/6 font-semibold">{item.role}</p>
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>
