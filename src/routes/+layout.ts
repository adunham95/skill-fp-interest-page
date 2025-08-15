// export const prerender = true;

import { PUBLIC_MIXPANEL_TOKEN } from '$env/static/public';
import mixpanel from 'mixpanel-browser';

mixpanel.init(PUBLIC_MIXPANEL_TOKEN, {
	debug: false,
	track_pageview: true,
	autocapture: {
		pageview: 'full-url',
		click: true, // click tracking enabled
		scroll: true,
		submit: true,
		capture_text_content: false
	},
	record_sessions_percent: 1
});
