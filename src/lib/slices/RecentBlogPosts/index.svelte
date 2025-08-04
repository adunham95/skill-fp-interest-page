<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.RecentBlogPostsSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
					{slice.primary.title}
				</h2>
				<div class="text-lg/8 text-gray-600">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<!-- {#each slice.primary.blog_posts as post}
					<article class="flex flex-col items-start justify-between">
						<div class="relative w-full">
							{#if isFilled.image(post.cover_image)}
								<img
									src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
									alt=""
									class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
								/>
							{/if}
							<div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"></div>
						</div>
						<div class="flex max-w-xl grow flex-col justify-between">
							<div class="mt-8 flex items-center gap-x-4 text-xs">
								<time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
								<div
									class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
								>
									Marketing
								</div>
							</div>
							<div class="group relative grow">
								<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
									<div>
										<span class="absolute inset-0"></span>
										Boost your conversion rate
									</div>
								</h3>
								<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
									Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non
									aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur
									nulla deserunt vel. Iusto corrupti dicta.
								</p>
							</div>
						</div>
					</article>
				{/each} -->
			</div>
		</div>
	</div>
</section>
