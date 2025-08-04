<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.RecentBlogPostsSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="py-24 sm:py-32">
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
				{#each slice.primary.featured_posts as postItem}
					{console.log('postItem', postItem)}
					{#if isFilled.contentRelationship(postItem.featured_post)}
						{@const post = postItem.featured_post}

						{console.log({ post })}
						<article class="flex flex-col items-start justify-between">
							<div class="relative w-full">
								{#if post.data?.cover_image}
									<img
										src={post.data?.cover_image.url}
										alt={post.data?.cover_image.alt}
										class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
									/>
								{/if}
								<div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"></div>
							</div>
							<div class="flex max-w-xl grow flex-col justify-between">
								<div class="mt-8 flex items-center gap-x-4 text-xs">
									{#if post.data?.publish_date}
										<time datetime="2020-03-16" class="text-gray-500"
											>{post.data?.publish_date}</time
										>
									{/if}
									{#if post.data?.label}
										<div
											class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
										>
											{post.data.label}
										</div>
									{/if}
								</div>
								<div class="group relative grow">
									<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
										{#if post.data?.title}
											<div>
												<span class="absolute inset-0"></span>
												{post.data?.title}
											</div>
										{/if}
									</h3>
									{#if post.data?.description}
										<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
											{post.data?.description}
										</p>
									{/if}
								</div>
							</div>
						</article>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
