import prisma from '$lib/Server/prisma';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { email } = await request.json();

	if (!email) return new Response('Email is required', { status: 400 });

	// Example: send to Mailchimp, ConvertKit, or your backend
	console.log('New newsletter signup:', email);
	await prisma.email.create({ data: { email } });

	return new Response(JSON.stringify({ success: true }), { status: 200 });
};
