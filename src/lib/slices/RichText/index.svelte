<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.RichTextSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.content} />
</section>

// ./src/components/RichText.tsx

<!-- import { RichTextField } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText, PrismicLink } from '@prismicio/react';

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1 className="font-bold text-4xl">{children}</h1>
  ),
  heading2: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold text-lg">{children}</h3>,
  paragraph: ({ children }) => <p>{children}</p>,
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="font-bold underline">{children}</PrismicLink>
  ),
};

interface RichTextProps {
  field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
}; -->
