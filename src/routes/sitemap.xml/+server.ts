// import { createClient } from '@prismicio/client';
import { createClient } from '$lib/prismicio';

export const GET = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });
	const documents = await client.getAllByType('page');
	const homePage = await client.getAllByType('homepage');

	console.log({ documents, homePage });

	const homepageData = homePage.map((doc) => {
		return `<url>
        <loc>https://career-fingerprint.com/</loc>
        <lastmod>${new Date(doc.last_publication_date).toISOString()}</lastmod>
        <priority>1.00</priority>
    </url> `;
	});

	const urls = documents.map((doc) => {
		return `
	  <url>
	    <loc>https://career-fingerprint.com${doc.url}</loc>
	    <lastmod>${new Date(doc.last_publication_date).toISOString()}</lastmod>
        <priority>0.80</priority>
	  </url>`;
	});

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${homepageData}
        <url>
            <loc>https://career-fingerprint.com/use-cases</loc>
            <lastmod>2025-07-01T16:55:01+00:00</lastmod>
            <priority>0.80</priority>
        </url>
	  ${urls.join('\n')}
	</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
