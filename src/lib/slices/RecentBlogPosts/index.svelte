<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.RecentBlogPostsSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) slices.
	<br />
	<strong>You can edit this slice directly in your code editor.</strong>
	<!--
	💡 Use Prismic MCP with your code editor
	
	Get AI-powered help to build your slice components — based on your actual model.
	
	▶️ Setup:
	1. Add a new MCP Server in your code editor:
	
	{
	  "mcpServers": {
	    "Prismic MCP": {
	      "command": "npx",
	      "args": ["-y", "@prismicio/mcp-server@latest"]
	    }
	  }
	}
	
	2. Select a model optimized for coding (e.g. Claude 3.7 Sonnet or similar)
	
	✅ Then open your slice file and ask your code editor:
		"Code this slice"
	
	Your code editor reads your slice model and helps you code faster ⚡
	🎙️ Give your feedback: https://community.prismic.io/t/help-us-shape-the-future-of-slice-creation/19505
	📚 Documentation: https://prismic.io/docs/ai#code-with-prismics-mcp-server
	-->
</section>
