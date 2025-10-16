<script>
	import rawSvg from '$lib/Images/blog-og-background.svg?raw';
	import rawWordmark from '$lib/Images/blog-og-wordmark.svg?raw';
	export let message = 'Hello, world!';

	const background = rawSvg.replace(/display\s*=\s*["']inline["']/g, 'display="block"');
</script>

<div
	style="
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	"
>
	<!-- Inline SVG background -->
	<div
		style="
            display: flex;
			position: absolute;
			inset: 0;
		"
	>
		{@html background}
	</div>

	<!-- Foreground text -->
	<div style="display:flex;">
		<div
			style="
            display:flex;
			position: relative;
			font-family: 'Josefin Sans';
			font-size: 72px;
			font-weight: 600;
			color: #ffffff;
			text-align: left;
			padding: 0 2rem;
            width: 65%;
		"
		>
			{message}
		</div>
		<div
			style="
                    display: flex;
                    width: 35%;
                "
		>
			{@html rawWordmark}
		</div>
	</div>
</div>
