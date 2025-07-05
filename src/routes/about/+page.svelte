<script lang="ts"></script>

<svelte:head>
	<title>About | Career Fingerprint | Track Your Achievements & Build Standout Resumes</title>
</svelte:head>

<div class="relative isolate overflow-hidden">
	<img
		src="/images/pexels-pixabay-290595.jpg"
		alt="A city looking out over water"
		class="absolute inset-0 -z-10 size-full object-cover"
	/>

	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
		<div
			class="mx-auto max-w-2xl rounded-md bg-white/30 p-4 backdrop-blur-md lg:mx-0 lg:shrink-0 lg:pt-8"
		>
			<h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-7xl">
				Career Fingerprint: Our Mission
			</h1>
			<p class="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
				We help ambitious professionals capture, organize, and leverage their achievements to
				accelerate career growth—whether landing their next role or excelling in their current one.
			</p>
		</div>
		<div
			class="mx-auto flex max-w-2xl lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
		></div>
	</div>
</div>

<div class=" px-6 py-24 sm:py-32 lg:px-8 xl:mx-auto xl:max-w-7xl">
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
		<h2
			class="font-title pb-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
		>
			About Us - Our Story
		</h2>
		<h3
			class="font-title pb-6 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl"
		>
			The Problem
		</h3>
		<p class="pb-4 text-xl/8 text-gray-600">
			Career Fingerprint was born from a simple frustration: preparing for job interviews shouldn't
			feel like archaeological work, digging through old emails and trying to remember what you
			accomplished two years ago.
		</p>
		<p class="pb-4 text-xl/8 text-gray-600">
			Like many professionals, our founder found himself scrambling before interviews, frantically
			jotting down achievements on sticky notes and maintaining messy spreadsheets that were never
			quite up to date. The breaking point came during interview prep when he realized he needed
			more than just a notes app—he needed a proper dashboard that could store, organize, and
			surface his professional wins when he needed them most.
		</p>
		<h3
			class="font-title pb-6 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl"
		>
			The Solution
		</h3>
		<p class="pb-4 text-xl/8 text-gray-600">
			What started as a basic interview dashboard has evolved into something bigger. The initial
			prototype focused on tracking job applications and keeping interview notes organized. But as
			development progressed, it became clear that the real power wasn't just in organizing
			interviews—it was in capturing and leveraging achievements throughout your entire career
			journey.
		</p>
		<p class="pb-4 text-xl/8 text-gray-600">
			The focus shifted intentionally: instead of building another job search tool, Skill
			Fingerprint was rebuilt from the ground up to help professionals document their value as they
			create it, not just when they need to prove it.
		</p>
		<h3
			class="font-title pb-6 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl"
		>
			Join the Beta
		</h3>
		<p class="pb-4 text-xl/8 text-gray-600">
			We're currently in pre-release, putting the finishing touches on a platform that bridges the
			gap between daily accomplishments and career opportunities. Our vision is simple: every
			professional deserves tools that are as organized and intentional as they are—no more
			scattered notes, forgotten wins, or last-minute interview panic.
		</p>
		<p class="pb-4 text-xl/8 text-gray-600">
			Whether you're preparing for your next role or positioning yourself for growth in your current
			one, Career Fingerprint will ensure your achievements are always at your fingertips, ready to
			open doors and advance your career.
		</p>
		<p class="pb-4 text-xl/8 font-bold text-gray-600">
			Ready to be among the first to experience a better way to manage your career? Sign up for beta
			access below.
		</p>
	</div>

	<!-- Image Section -->
	<div class="mt-32 sm:mt-40 xl:px-8">
		<img
			src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
			alt=""
			class="aspect-5/2 w-full rounded object-cover xl:rounded-3xl"
		/>
	</div>

	<!-- Team Section -->
	<div>
		{@render teamList([
			{ name: 'Adrian Dunham', imgURL: 'images/AdrianHeadshot.jpeg', title: 'Founder/CEO' },
			{ name: 'Emelie Dunham', imgURL: '', title: 'Co-Founder' }
		])}
	</div>
</div>

{#snippet teamList(teamMembers: { name: string; imgURL: string; title: string }[])}
	<div class=" grid gap-20 py-24 sm:py-32 xl:grid-cols-3">
		<div class="max-w-xl">
			<h2
				class="font-title text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
			>
				Our Team
			</h2>
			<p class="mt-6 text-lg/8 text-gray-600">A small group devoted to help people</p>
		</div>
		<ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
			{#each teamMembers as teamMate}
				<li>
					<div class="flex items-center gap-x-6">
						<img
							class="size-16 rounded-full"
							src={teamMate.imgURL}
							alt="CEO/Founder Adrian Dunham"
						/>
						<div>
							<h3 class="text-lg font-semibold tracking-tight text-gray-900">
								{teamMate.name}
							</h3>
							<p class="text-primary text-sm/6 font-semibold">{teamMate.title}</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}
