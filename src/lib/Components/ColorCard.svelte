<script lang="ts">
	const {
		name = 'HEATSTROKE',
		type = 'Primary',
		hex = '#ff7a8a',
		rgb = '255, 122, 138',
		cmyk = '0, 52, 46, 0',
		shades = [],
		tints = []
	} = $props();
</script>

<div class="overflow-hidden rounded-lg bg-white shadow-md">
	<div class="grid grid-cols-5">
		{#each shades as shadeClass}
			<div class={`aspect-square h-full w-full ${shadeClass}`}></div>
		{/each}
	</div>

	<div class="h-40" style="background-color: {hex}"></div>

	<div class="grid grid-cols-5">
		{#each tints as tintClass}
			<div class={`aspect-square h-full w-full ${tintClass}`}></div>
		{/each}
	</div>

	<div class="space-y-1 p-4 text-sm">
		<div class="font-title text-lg font-bold">{name}</div>
		<div class="text-md font-bold">{type}</div>
		<div class="text-gray-800">{hex}</div>
		<div class="text-gray-800">RGB {rgb}</div>
		<div class="text-gray-800">CMYK {cmyk}</div>
	</div>
</div>
