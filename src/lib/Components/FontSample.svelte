<script>
	const { fontClass = 'font-libre', fontName } = $props();
	const alphabetPairs = [
		['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff'],
		['Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll'],
		['Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr'],
		['Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx'],
		['Yy', 'Zz']
	];
</script>

<div class={` space-y-6 text-center text-black ${fontClass}`}>
	<!-- Large Aa -->
	<div class="text-primary w-full text-start text-8xl font-normal">Aa</div>

	<!-- Font name -->
	<div class="text-start text-xl font-normal">{fontName}</div>

	<!-- Alphabet Grid -->
	<div class="grid grid-cols-6 justify-items-center gap-x-4 gap-y-4 text-start text-xl">
		{#each alphabetPairs as row}
			{#each row as pair}
				<span class="w-full text-start">{pair}</span>
			{/each}
		{/each}
	</div>
</div>
