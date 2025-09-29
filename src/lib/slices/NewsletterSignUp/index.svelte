<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.NewsletterSignUpSlice>;

	const { slice }: Props = $props();

	let email = $state('');
	let success = $state(false);
	let isLoading = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isLoading = true;
		error = '';
		success = false;

		try {
			const res = await fetch('/api/email-list', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, formID: slice.primary.formid })
			});

			if (!res.ok) throw new Error('Failed to subscribe');

			success = true;
			email = '';
		} catch (err: any) {
			error = err.message;
		} finally {
			isLoading = false;
		}
	}
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="bg-secondary py-16 sm:py-24 lg:py-32">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
			<h2
				class="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:col-span-7"
			>
				{slice.primary.title}
			</h2>
			<form onsubmit={handleSubmit} class="w-full max-w-md lg:col-span-5 lg:pt-2">
				<div class="flex gap-x-4">
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						type="email"
						name="email"
						bind:value={email}
						required
						placeholder="Enter your email"
						autocomplete="email"
						class="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
					/>
					<button class="btn btn--primary" type="submit" disabled={isLoading}>
						{slice.primary.cta}
					</button>
				</div>
				<p class="mt-4 text-sm/6 text-gray-300">
					We care about your data. Read our <a
						href="/privacy-policy"
						class="font-semibold whitespace-nowrap text-white hover:text-indigo-50"
					>
						privacy policy
					</a>.
				</p>
				{#if success}
					<p class="mt-2 text-green-600">Subscribed successfully!</p>
				{/if}
				{#if error}
					<p class="mt-2 text-red-600">{error}</p>
				{/if}
			</form>
		</div>
	</div>
</section>
