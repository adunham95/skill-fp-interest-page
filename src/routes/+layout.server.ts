export const prerender = 'auto';
import { createClient } from '$lib/prismicio';

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const banner = await client.getSingle('banner').catch(() => null);
	const header = await client.getSingle('header').catch(() => null);

	return {
		banner,
		header
	};
}
