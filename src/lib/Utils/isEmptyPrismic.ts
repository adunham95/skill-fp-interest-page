import type { SliceZone } from '@prismicio/client';

/**
 * Check if a single Prismic field is "empty"
 */
function isEmptyField(field: any): boolean {
	if (!field) return true;

	// Text fields
	if (typeof field === 'string') return field.trim() === '';

	// Rich text
	if (Array.isArray(field)) return field.length === 0;

	// Image
	if (field?.url) return false;

	// Embed
	if (field?.embed_url) return false;

	// Number or boolean counts as non-empty if defined
	if (typeof field === 'number' || typeof field === 'boolean') return false;

	return true;
}

/**
 * Check if a slice is empty
 */
export function isEmptySlice(slice: any): boolean {
	if (!slice) return true;

	// Primary
	if (slice.primary) {
		const hasPrimaryContent = Object.values(slice.primary).some((field) => !isEmptyField(field));
		if (hasPrimaryContent) return false;
	}

	// Items (groups / repeatable fields)
	if (slice.items && Array.isArray(slice.items)) {
		const hasItemContent = slice.items.some((item: any) =>
			Object.values(item).some((field) => !isEmptyField(field))
		);
		if (hasItemContent) return false;
	}

	return true;
}

/**
 * Return only non-empty slices from a page document
 */
export function getNonEmptySlices(page: { data: { slices: SliceZone } }) {
	return page.data.slices.filter((slice) => !isEmptySlice(slice));
}

/**
 * Check if any arbitrary page data (non-slice fields) is empty
 */
export function isEmptyPageField(pageData: Record<string, any>, key: string) {
	return isEmptyField(pageData[key]);
}

/**
 * Example: Get all non-empty fields from a page
 */
export function getNonEmptyPageFields(pageData: Record<string, any>) {
	return Object.entries(pageData).filter(([key, value]) => !isEmptyField(value));
}
