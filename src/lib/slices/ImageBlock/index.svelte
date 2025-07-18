<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ImageBlockSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
>
	<div class="mt-32 sm:mt-40 xl:px-8">
		<PrismicImage
			field={slice.primary.image}
			class="aspect-5/2 w-full rounded object-cover xl:rounded-3xl"
		/>
	</div>
</section>
