<script>
	import PageContainer from '$lib/Components/PageContainer.svelte';
	import SEO from '$lib/Components/SEO.svelte';
	import { PrismicImage } from '@prismicio/svelte';

	const { data } = $props();
	console.log({ data });
</script>

<SEO
	pageName={'Blog Posts'}
	meta_description={'Explore expert career growth tips, interview preparation advice, and performance review strategies. Read the latest articles from Career Fingerprint to level up your professional journey.'}
/>

<PageContainer className="py-10">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
				From the blog
			</h2>
			<p class="mt-2 text-lg/8 text-gray-600">
				Learn how to grow your career with our expert advice.
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data.posts as post}
				<article class="flex flex-col items-start justify-between">
					<div class="relative w-full">
						<PrismicImage
							field={post.data.cover_image}
							class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
						/>

						<div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"></div>
					</div>
					<div class="flex max-w-xl grow flex-col justify-between">
						<div class="group relative grow">
							<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
								<a href={post.url}>
									<span class="absolute inset-0"></span>
									{post.data.title}
								</a>
							</h3>
							<div class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
								{post.data.description}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div></PageContainer
>
