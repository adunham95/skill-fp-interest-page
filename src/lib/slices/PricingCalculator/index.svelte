<script lang="ts">
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.PricingCalculatorSlice>;
	const { slice }: Props = $props();

	const tiers = slice.items ?? [];
	const allowOverflow = slice.primary.allow_overflow ?? false;

	// Sort tiers by min_seats for safe boundaries
	tiers.sort((a, b) => (a.min_seats || 0) - (b.min_seats || 0));

	// Slider boundaries
	let sliderMin = $state(tiers[0]?.min_seats ?? 1);
	let sliderMax = $state(tiers[tiers.length - 1]?.max_seats ?? 100);

	// State
	let billingCycle = $state(slice.primary.default_billing_cycle || 'monthly');
	let seats = $state(sliderMin);

	function getTier(seatCount) {
		// If overflow allowed → use highest tier beyond max
		if (allowOverflow && seatCount > tiers[tiers.length - 1].max_seats) {
			return tiers[tiers.length - 1];
		}

		// Standard match
		const match = tiers.find(
			(tier) => seatCount >= (tier.min_seats || 0) && seatCount <= (tier.max_seats || 999999)
		);

		// If overflow disabled and no match → clamp to highest tier
		return match || tiers[tiers.length - 1];
	}

	const selectedTier = $derived(getTier(seats));

	function calculatePrice(tier, seatCount, cycle) {
		if (!tier) return 0;

		const effectiveSeats =
			!allowOverflow && seatCount > (tier.max_seats ?? seatCount) ? tier.max_seats : seatCount;

		const base = cycle === 'monthly' ? tier.base_price_monthly || 0 : tier.base_price_yearly || 0;

		const perSeat =
			cycle === 'monthly' ? tier.price_per_seat_monthly || 0 : tier.price_per_seat_yearly || 0;

		return base + effectiveSeats * perSeat;
	}

	// Derived total price (REPLACES `$:`)
	const totalPrice = $derived(calculatePrice(selectedTier, seats, billingCycle));

	// Optional: side effects (if needed)
	$effect(() => {
		// Example: Logging or analytics
		// console.log("Tier changed:", selectedTier?.tier_name);
	});

	const tierSupportsCycle = $derived(() => {
		if (!selectedTier) return false;

		// Allowed in both
		if (selectedTier.billing_cycle === 'both') return true;

		// Exact match
		return selectedTier.billing_cycle === billingCycle;
	});

	const billingMessage = $derived(() => {
		if (!selectedTier) return null;

		if (selectedTier.billing_cycle === 'both') return null;

		if (selectedTier.billing_cycle === 'monthly' && billingCycle === 'yearly') {
			return 'This tier is only available monthly.';
		}

		if (selectedTier.billing_cycle === 'yearly' && billingCycle === 'monthly') {
			return 'This tier is only available yearly.';
		}

		return null;
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="w-full py-16"
>
	<div class="mx-auto max-w-4xl px-4">
		<!-- Title -->
		{#if slice.primary.title}
			<h2 class="text-center text-3xl font-semibold md:text-4xl">
				<PrismicRichText field={slice.primary.title} />
			</h2>
		{/if}

		{#if slice.primary.subtitle}
			<div class="mt-2 text-center text-gray-500">
				<PrismicRichText field={slice.primary.subtitle} />
			</div>
		{/if}

		<!-- Billing cycle toggle -->
		<div class="mt-8 flex justify-center gap-3">
			<button
				class={`btn ${billingCycle === 'monthly' ? 'btn--primary' : 'btn-text--secondary'}`}
				onclick={() => (billingCycle = 'monthly')}
			>
				Monthly
			</button>

			<button
				class={`btn ${billingCycle === 'yearly' ? 'btn--primary' : 'btn-text--secondary'}`}
				onclick={() => (billingCycle = 'yearly')}
			>
				Yearly
			</button>
		</div>

		<!-- Slider -->
		<div class="mt-10">
			<label for="range" class="text-sm font-medium text-gray-700">Number of Seats</label>

			<div class="mt-4 flex items-center gap-4">
				<input
					id="range"
					type="range"
					min={sliderMin}
					max={sliderMax}
					bind:value={seats}
					step={10}
					class="accent-primary w-full cursor-pointer"
				/>

				<div class="w-16 text-right text-lg font-semibold">
					<input bind:value={seats} min={sliderMin} max={sliderMax} type="number" />
				</div>
			</div>

			<div class="mt-1 flex justify-between text-xs text-gray-500">
				<span>{sliderMin} seats</span>
				<span>{sliderMax} seats</span>
			</div>
		</div>

		<!-- Tier + Pricing -->
		{#if selectedTier}
			<!-- Billing restriction message -->
			{#if billingMessage()}
				<div
					class="mt-4 rounded-xl border border-yellow-300 bg-yellow-50 p-3 text-sm text-yellow-700"
				>
					{billingMessage()}
				</div>
			{/if}

			<!-- Price (only show if compatible billing cycle) -->
			{#if tierSupportsCycle()}
				<div class="mt-6 text-center">
					<p class="text-sm text-gray-500">Estimated Price</p>

					<p class="mt-1 text-4xl font-bold">
						${totalPrice.toLocaleString()}
					</p>

					<p class="mt-1 text-sm text-gray-400">
						{billingCycle === 'monthly' ? 'per month' : 'per year'}
					</p>
				</div>
			{:else}
				<!-- Show alternative CTA or disable -->
				<div class="mt-6 text-center text-sm text-gray-500">
					Pricing unavailable for this billing cycle.
				</div>
			{/if}

			<!-- CTA only if supported -->
			{#if tierSupportsCycle() && selectedTier.cta_link && selectedTier.cta_link.text}
				<div class="mt-6 flex justify-center">
					<PrismicLink field={selectedTier.cta_link} class="btn btn--primary" />
				</div>
			{/if}
		{/if}
	</div>
</section>
