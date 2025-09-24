import { createClient } from '$lib/prismicio';
import { error, redirect } from '@sveltejs/kit';
export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const docs = await client.getAllByType('vanity_url');
	console.log(docs.map((d) => d.uid));

	// 1. Try vanity_url first
	let vanity;
	try {
		vanity = await client.getByUID('vanity_url', params.uid);
	} catch {
		//
	}

	if (vanity?.data?.redirect_target?.link_type === 'Web') {
		throw redirect(302, vanity.data.redirect_target.url);
	}

	try {
		const page = await client.getByUID('page', params.uid);
		return { page };
	} catch {
		// Not found → show 404
		throw error(404, 'Page not found');
	}
}
