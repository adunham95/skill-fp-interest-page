<script>
	import Seo from '$lib/Components/SEO.svelte';
	import { PUBLIC_CLOUDFLARE_TURNSTYLE_SITE_KEY } from '$env/static/public';
</script>

<Seo />

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<div class="relative">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
			<svg
				class="fill-background absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="0,0 90,0 50,100 0,100" />
			</svg>

			<div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
				<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
					<h1
						class="font-title text-5xl leading-14 font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
					>
						Highlight your your unique achievements
					</h1>
					<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
						Add your achievements your Career Fingerprint to help you standout during your next
						interview or 1:1.
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a href="#signup" class="btn btn--primary">Build My Fingerprint</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class=" relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
			src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
			alt="Guy sitting on a ledge working on a laptop"
		/>
		<!-- <p class=" absolute right-0 bottom-0 text-[8px] text-gray-100">
			Photo by Photo By: Kaboompics.com:
			https://www.pexels.com/photo/a-woman-wearing-eyeglasses-using-laptop-5908728/
		</p> -->
	</div>
</div>

<div class="bg-secondary overflow-hidden py-24 text-gray-50 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pt-4 lg:pr-8">
				<div class="lg:max-w-lg">
					<h2 class="text-primary text-base/7 font-semibold">How it works</h2>
					<p
						class="font-title mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-5xl"
					>
						Capture your career
					</p>
					<p class="mt-6 text-lg/8 text-gray-100">
						Keep your career wins in one place—never lose track of your progress, big or small.
						Career Fingerprint helps you turn everyday accomplishments into powerful career assets.
					</p>
					<dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="text-primary absolute top-1 left-1 size-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
									/>
								</svg>
								Weekly Email Reminders
							</dt>
							<dd class="inline">Get a weekly reminder to fill out achievements</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="text-primary absolute top-1 left-1 size-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
									/>
								</svg>

								Resume Ready
							</dt>
							<dd class="inline">Easily transform entries into polished resume bullets.</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="text-primary absolute top-1 left-1 size-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
									/>
								</svg>

								Meeting prep
							</dt>
							<dd class="inline">
								Prep for an interview or meeting and get a detailed meeting screen where you can
								view all your achievements, resume, job description and previous notes on a single
								screen
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<picture>
				<source srcset="/images/screenshot-resume-tool.webp" type="image/webp" />
				<img
					src="/images/screenshot-resume-tool.png"
					alt="Product screenshot of the resume tool"
					class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
					width="2432"
					height="1442"
				/>
			</picture>
		</div>
	</div>
</div>

<div class="bg-background py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-primary text-base/7 font-semibold">Who its for</h2>
			<p
				class="font-title mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
			>
				Built for every stage of your journey
			</p>
			<p class="mt-6 text-lg/8 text-gray-600">
				Whether you're growing in your current role, switching industries, or starting fresh, Career
				Fingerprint evolves with your career journey.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="text-primary size-5 flex-none"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
							/>
						</svg>

						Current professionals
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
						<p class="flex-auto">
							Track progress, prep for reviews, and refine your resume over time.
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="text-primary size-5 flex-none"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
							/>
						</svg>

						Students & recent grads
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
						<p class="flex-auto">
							Build confidence with a record of growth from internships to your first job.
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="text-primary size-5 flex-none"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
							/>
						</svg>
						Career switchers
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
						<p class="flex-auto">
							Reflect on your story and tailor it to new opportunities and industries.
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<div class="bg-background py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-primary text-base/7 font-semibold">Toolkit</h2>
			<p
				class="font-title mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
			>
				Your Career Toolkit
			</p>
			<p class="mt-6 text-lg/8 text-gray-900">
				Use every tool in our Career Toolkit to stay organized, prepared, and confident at every
				stage of your professional journey. Whether you're prepping for an interview or updating
				your resume, our tools are here to help.
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			<article
				class="hover:bg-secondary/10 flex flex-col items-start justify-between rounded-2xl p-4"
			>
				<div class="border-secondary relative w-full rounded-2xl border-2">
					<img
						src="/images/undraw_launch-event_aur1.svg"
						alt="Launch event shot"
						class="bg-background aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
					/>
				</div>
				<div class="max-w-xl">
					<div class="group relative">
						<h3 class="mt-8 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
							<p>Record Career Achievements</p>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
							Log wins with our Accomplishment Tracker to boost your resume and prep for reviews.
						</p>
					</div>
				</div>
			</article>
			<article
				class="hover:bg-secondary/10 flex flex-col items-start justify-between rounded-2xl p-4"
			>
				<div class="border-secondary relative w-full rounded-2xl border-2">
					<img
						src="/images/undraw_saving-notes_wp71.svg"
						alt="Preparing for meetings"
						class="bg-background aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
					/>
				</div>
				<div class="max-w-xl">
					<div class="group relative">
						<h3 class="mt-8 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
							<p>Prep For Meetings</p>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
							Stay focused with tools to organize thoughts for interviews, 1:1s, or team updates.
						</p>
					</div>
				</div>
			</article>
			<article
				class="hover:bg-secondary/10 flex flex-col items-start justify-between rounded-2xl p-4"
			>
				<div class="border-secondary relative w-full rounded-2xl border-2">
					<img
						src="/images/undraw_online-stats_50mk.svg"
						alt="Person sitting on a computer monitor with progress bars"
						class="bg-background aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
					/>
				</div>
				<div class="max-w-xl">
					<div class="group relative">
						<h3 class="mt-8 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
							<p>Meeting Screen</p>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
							Access key points fast with a personalized Career Toolkit note system.
						</p>
					</div>
				</div>
			</article>
			<article
				class="hover:bg-secondary/10 flex flex-col items-start justify-between rounded-2xl p-4"
			>
				<div class="border-secondary relative w-full rounded-2xl border-2">
					<img
						src="/images/undraw_working_n9u0.svg"
						alt="Two people sitting with an interview"
						class="bg-background aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
					/>
				</div>
				<div class="max-w-xl">
					<div class="group relative">
						<h3 class="mt-8 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
							<p>Track Your Career</p>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
							Use our Job Application Tracker and Resume Builder to showcase your growth.
						</p>
					</div>
				</div>
			</article>
		</div>
	</div>
</div>

<!-- FAQ -->
<div class="bg-secondary">
	<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
		<h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
			Frequently asked questions
		</h2>
		<p class="mt-6 max-w-2xl text-base/7 text-gray-300">
			Have a different question and can’t find the answer you’re looking for? Reach out to our
			support team by sending us an email at <a
				href="mailto:careerfingerprint@gmail.com"
				class="text-primary hover:text-primary-600 font-semibold"
			>
				careerfingerprint@gmail.com</a
			> and we’ll get back to you as soon as we can.
		</p>
		<div class="mt-20">
			<dl class="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:gap-x-10">
				<div>
					<dt class="text-base/7 font-semibold text-white">What is Career Fingerprint used for?</dt>
					<dd class="mt-2 text-base/7 text-gray-300">
						Career Fingerprint helps you track your accomplishments, prepare resumes, and get ready
						for interviews. It’s a private workspace that supports your career growth—whether you’re
						job hunting, preparing for a performance review, or just staying organized.
					</dd>
				</div>
				<div>
					<dt class="text-base/7 font-semibold text-white">
						How is this different from LinkedIn or a resume builder?
					</dt>
					<dd class="mt-2 text-base/7 text-gray-300">
						Career Fingerprint helps you track the journey, not just the destination. It’s a private
						space to collect wins, prep for interviews, and convert your work into resumes—without
						broadcasting it publicly.
					</dd>
				</div>
				<div>
					<dt class="text-base/7 font-semibold text-white">
						Can students use this before getting their first job?
					</dt>
					<dd class="mt-2 text-base/7 text-gray-300">
						Definitely. Students and recent grads can build confidence by tracking growth from
						internships, school projects, or volunteer work.
					</dd>
				</div>
				<div>
					<dt class="text-base/7 font-semibold text-white">
						How does Career Fingerprint help with interview prep?
					</dt>
					<dd class="mt-2 text-base/7 text-gray-300">
						Our meeting screen brings together your top achievements, role descriptions, and notes
						so you can walk into meetings with confidence. Think of it as your personal cheat sheet.
					</dd>
				</div>
				<div>
					<dt class="text-base/7 font-semibold text-white">
						Can I track my accomplishments over time?
					</dt>
					<dd class="mt-2 text-base/7 text-gray-300">
						Absolutely. Career Fingerprint is like a living career journal—you can log wins, skills
						used, lessons learned, and see your growth unfold.
					</dd>
				</div>
				<div>
					<dt class="text-base/7 font-semibold text-white">
						How can Career Fingerprint help with performance reviews?
					</dt>
					<dd class="mt-2 text-base/7 text-gray-300">
						By logging wins regularly, you’ll always have a record of your impact—perfect for annual
						reviews, promotions, or raise discussions.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<!-- Email Sign UP -->
<!-- <div id="signup" class=" py-16 sm:py-24 lg:py-32">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
		<h2
			class="max-w-xl text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl lg:col-span-7"
		>
			Want to be the first to try it?<br /> Sign up for our wait list
		</h2>
		<form class="w-full max-w-md lg:col-span-5 lg:pt-2" method="POST" action="?/emailSignUp">
			<div class="flex gap-x-4">
				<label for="email-address" class="sr-only">Email address</label>
				<input
					id="email-address"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="focus:outline-primary min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
					placeholder="Enter your email"
				/>
				<div class="cf-turnstile" data-sitekey={PUBLIC_CLOUDFLARE_TURNSTYLE_SITE_KEY}></div>
				<button type="submit" class="btn btn--primary">Sign up</button>
			</div>
			<p class="mt-4 text-sm/6 text-gray-900">
				We care about your data. Read our <a
					href="/privacy-policy"
					class="text-primary hover:text-primary-400 font-semibold whitespace-nowrap"
					>privacy policy</a
				>.
			</p>
		</form>
	</div>
</div> -->
