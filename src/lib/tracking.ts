import mixpanel from 'mixpanel-browser';
import { browser } from '$app/environment';

const TIME_ON_PAGE_EVENT = 'Time on Page';

let currentPage: { pagePath: string; pageTitle: string } | null = null;

function safeMixpanelTrack(event: string, props: Record<string, unknown> = {}) {
	if (!browser) return;
	if (!mixpanel || typeof mixpanel.track !== 'function') return;
	if (!(mixpanel as any).__loaded) return;
	try {
		mixpanel.track(event, props);
	} catch (err) {
		console.warn('Mixpanel track failed:', err);
	}
}

/**
 * Call on each page entry. Starts Mixpanel's internal timer so that
 * the next `flushPageTimer` call automatically includes `$duration`.
 */
export function startPageTimer(pagePath: string, pageTitle: string) {
	currentPage = { pagePath, pageTitle };
	try {
		if (browser && (mixpanel as any).__loaded) {
			mixpanel.time_event(TIME_ON_PAGE_EVENT);
		}
	} catch {
		// mixpanel not ready yet
	}
}

/**
 * Call before navigating away or on beforeunload. Fires the timed event
 * with `$duration` (seconds) automatically appended by Mixpanel.
 */
export function flushPageTimer() {
	if (!currentPage) return;
	safeMixpanelTrack(TIME_ON_PAGE_EVENT, {
		page_path: currentPage.pagePath,
		page_title: currentPage.pageTitle
	});
	currentPage = null;
}
