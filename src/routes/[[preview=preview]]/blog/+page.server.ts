import { createClient } from '$lib/prismicio';
export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const posts = await client.getAllByType('blog_post');

	return { posts };
}
