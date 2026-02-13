<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.FeatureBentoBoxSlice>;

	const { slice }: Props = $props();

	const GRID_WIDTH = 6;

	type PlacedCard = {
		card: NonNullable<Content.FeatureBentoBoxSliceDefaultGridPrimary['feature_cards']>[number];
		index: number;
		row: number;
		col: number;
		span: number;
		isTopLeft: boolean;
		isTopRight: boolean;
		isBottomLeft: boolean;
		isBottomRight: boolean;
	};

	function hasText(v: unknown): v is string {
		return typeof v === 'string' && v.trim().length > 0;
	}

	function getCardSpan(size: unknown): number {
		if (typeof size !== 'string') return 2;

		switch (size.trim().toLowerCase()) {
			case 'large':
				return 4;
			case 'medium':
				return 3;
			default:
				return 2;
		}
	}

	function placeCards(
		cards: NonNullable<Content.FeatureBentoBoxSliceDefaultGridPrimary['feature_cards']>
	): PlacedCard[] {
		const placements: Array<
			Omit<PlacedCard, 'isTopLeft' | 'isTopRight' | 'isBottomLeft' | 'isBottomRight'>
		> = [];

		let row = 1;
		let col = 1;

		cards.forEach((card, index) => {
			const span = getCardSpan(card.size);

			if (col + span - 1 > GRID_WIDTH) {
				row += 1;
				col = 1;
			}

			placements.push({ card, index, row, col, span });

			col += span;
			if (col > GRID_WIDTH) {
				row += 1;
				col = 1;
			}
		});

		const maxRow = placements.reduce((max, item) => Math.max(max, item.row), 1);

		return placements.map((item) => ({
			...item,
			isTopLeft: item.row === 1 && item.col === 1,
			isTopRight: item.row === 1 && item.col + item.span - 1 === GRID_WIDTH,
			isBottomLeft: item.row === maxRow && item.col === 1,
			isBottomRight: item.row === maxRow && item.col + item.span - 1 === GRID_WIDTH
		}));
	}

	const placedCards = $derived(placeCards(slice.primary.feature_cards ?? []));

	function shellRadiusClass(card: PlacedCard, isFirst: boolean, isLast: boolean): string {
		const classes = ['rounded-lg'];

		if (isFirst) classes.push('max-lg:rounded-t-4xl');
		if (isLast) classes.push('max-lg:rounded-b-4xl');
		if (card.isTopLeft) classes.push('lg:rounded-tl-4xl');
		if (card.isTopRight) classes.push('lg:rounded-tr-4xl');
		if (card.isBottomLeft) classes.push('lg:rounded-bl-4xl');
		if (card.isBottomRight) classes.push('lg:rounded-br-4xl');

		return classes.join(' ');
	}

	function innerRadiusClass(card: PlacedCard, isFirst: boolean, isLast: boolean): string {
		const classes = ['rounded-[calc(var(--radius-lg)+1px)]'];

		if (isFirst) classes.push('max-lg:rounded-t-[calc(2rem+1px)]');
		if (isLast) classes.push('max-lg:rounded-b-[calc(2rem+1px)]');
		if (card.isTopLeft) classes.push('lg:rounded-tl-[calc(2rem+1px)]');
		if (card.isTopRight) classes.push('lg:rounded-tr-[calc(2rem+1px)]');
		if (card.isBottomLeft) classes.push('lg:rounded-bl-[calc(2rem+1px)]');
		if (card.isBottomRight) classes.push('lg:rounded-br-[calc(2rem+1px)]');

		return classes.join(' ');
	}
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="py-24 sm:py-32"
>
	<div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
		{#if hasText(slice.primary.eyebrow)}
			<p class="text-primary text-base/7 font-semibold">{slice.primary.eyebrow}</p>
		{/if}

		{#if hasText(slice.primary.title)}
			<h2
				class="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl"
			>
				{slice.primary.title}
			</h2>
		{/if}

		<div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
			{#each placedCards as item, i (item.index)}
				<div
					class="relative lg:col-span-[var(--col-span)] lg:col-start-[var(--col-start)] lg:row-start-[var(--row-start)]"
					style={`--col-span:${item.span};--col-start:${item.col};--row-start:${item.row};`}
				>
					<div
						class={`absolute inset-0 bg-white ${shellRadiusClass(item, i === 0, i === placedCards.length - 1)}`}
					></div>
					<div
						class={`relative flex h-full flex-col overflow-hidden ${innerRadiusClass(item, i === 0, i === placedCards.length - 1)}`}
					>
						{#if item.card.icon_or_image?.url}
							<PrismicImage
								field={item.card.icon_or_image}
								class="h-64 w-full object-contain object-center lg:h-80"
								imgixParams={{ q: 80, auto: ['format', 'compress'] }}
							/>
						{:else}
							<div class="h-64 w-full bg-slate-100 lg:h-80"></div>
						{/if}

						<div class="p-10 pt-4">
							{#if hasText(item.card.label)}
								<p class="text-sm/4 font-semibold text-indigo-600">{item.card.label}</p>
							{/if}

							{#if item.card.card_title}
								<h3 class="mt-2 text-lg font-medium tracking-tight text-gray-950">
									<PrismicText field={item.card.card_title} />
								</h3>
							{/if}

							{#if item.card.description}
								<div class="mt-2 max-w-lg text-sm/6 text-gray-600">
									<PrismicRichText field={item.card.description} />
								</div>
							{/if}
						</div>
					</div>
					<div
						class={`pointer-events-none absolute inset-0 shadow-sm outline outline-black/5 ${shellRadiusClass(item, i === 0, i === placedCards.length - 1)}`}
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
