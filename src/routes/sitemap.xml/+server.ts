import { createClient } from '$lib/prismicio';
import { asLink } from '@prismicio/client';

export const GET = async ({ fetch, cookies }) => {
	const CANONICAL_DOMAIN = 'https://mycareerfingerprint.com';
	const client = createClient({ fetch, cookies });

	const [documents, blog, features, homePage] = await Promise.all([
		client.getAllByType('page'),
		client.getAllByType('blog_post'),
		client.getAllByType('features'),
		client.getAllByType('homepage')
	]);

	const homepage = homePage[0];

	const homepageData = `
		<url>
			<loc>${CANONICAL_DOMAIN}/</loc>
			<lastmod>${new Date(homepage.last_publication_date).toISOString()}</lastmod>
			<priority>1.00</priority>
		</url>`;

	const urls = documents.map(
		(doc) => `
		<url>
			<loc>${CANONICAL_DOMAIN}${doc.url}</loc>
			<lastmod>${new Date(doc.last_publication_date).toISOString()}</lastmod>
			<priority>0.80</priority>
		</url>`
	);

	const blogUrls = blog.map(
		(doc) => `
		<url>
			<loc>${CANONICAL_DOMAIN}${asLink(doc)}</loc>
			<lastmod>${new Date(doc.last_publication_date).toISOString()}</lastmod>
			<priority>0.80</priority>
		</url>`
	);

	const featuresUrls = features.map(
		(doc) => `
		<url>
			<loc>${CANONICAL_DOMAIN}${asLink(doc)}</loc>
			<lastmod>${new Date(doc.last_publication_date).toISOString()}</lastmod>
			<priority>0.80</priority>
		</url>`
	);

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${homepageData}
		${urls.join('\n')}
		${blogUrls.join('\n')}
		${featuresUrls.join('\n')}
	</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=60'
		}
	});
};
