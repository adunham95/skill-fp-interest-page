import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });
	const homepage = await client.getSingle('homepage');

	return { homepage };
}
