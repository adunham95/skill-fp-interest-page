// src/routes/api/og/+server.ts
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import JosefinSans from '$lib/fonts/JosefinSans-Regular.ttf';
import { read } from '$app/server';
import Card from '$lib/Components/OGCard.svelte';
import { html as toReactNode } from 'satori-html';
import { render } from 'svelte/server';

const fontData = read(JosefinSans).arrayBuffer();

const height = 630;
const width = 1200;

export const GET = async ({ url }) => {
	const message = url.searchParams.get('message') ?? undefined;
	const renderOutput = render(Card, {
		props: {
			message
		}
	});

	const { body } = renderOutput;

	const element = toReactNode(`${body}`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Josefin Sans',
				data: await fontData,
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(new Uint8Array(image.asPng()), {
		headers: {
			'content-type': 'image/png',
			// Cache in CDN for 1 day, allow serving stale up to 1 week if revalidation fails
			'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
		}
	});
};
