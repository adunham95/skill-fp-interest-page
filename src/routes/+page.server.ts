import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import prisma from '$lib/Server/prisma';
import { CLOUDFLARE_TURNSTYLE_SECRET_KEY } from '$env/static/private';

export const actions = {
	emailSignUp: async (event) => {
		const data = await event.request.formData();

		const email = data.get('email');
		const token = data.get('cf-turnstile-response');
		const ip = event.request.headers.get('CF-Connecting-IP');

		console.log({ token, email });

		const formData = new FormData();
		formData.append('secret', CLOUDFLARE_TURNSTYLE_SECRET_KEY);
		formData.append('response', token as string);
		formData.append('remoteip', ip as string);

		console.log(email);
		const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
		const result = await fetch(url, {
			body: formData,
			method: 'POST'
		});

		const outcome = await result.json();

		console.log({ outcome });

		if (outcome.success) {
			if (email) {
				await prisma.email.create({ data: { email: email.toString() } });
			}

			redirect(303, '/sign-up-success');
			return { success: true };
		}
		return { success: false };
	}
} satisfies Actions;
