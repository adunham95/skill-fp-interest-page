export const GET = async () => {
	const sitemapUrl = 'https://mycareerfingerprint.com/sitemap.xml';
	await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
	return new Response('Pinged Google Sitemap');
};
