import Notebook from '$lib/icons/Notebook.svelte';
import Target from '$lib/icons/Target.svelte';
import Trophy from '$lib/icons/Trophy.svelte';
import ArrowRightLeft from './icons/ArrowRightLeft.svelte';
import DocumentText from './icons/DocumentText.svelte';
import Flag from './icons/Flag.svelte';
import Square2X2 from './icons/Square2X2.svelte';
import Star from './icons/Star.svelte';

export const ICONS = {
	target: Target,
	trophy: Trophy,
	notebook: Notebook,
	arrowRightLeft: ArrowRightLeft,
	flag: Flag,
	square2x2: Square2X2,
	star: Star,
	documentText: DocumentText
} as const;

export type IconKey = keyof typeof ICONS;
