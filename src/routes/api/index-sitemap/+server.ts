import { PUBLIC_VERCEL_URL } from '$env/static/public';

export const GET = async () => {
	await fetch(`https://www.google.com/ping?sitemap=${PUBLIC_VERCEL_URL}`);
	return new Response('Pinged Google Sitemap');
};
