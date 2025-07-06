import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	plugins: [
		tailwindcss(),
		sveltekit(),
		devtoolsJson(),
		{
			name: 'simpleanalytics',
			transformIndexHtml(html) {
				const file = mode === 'development' ? 'latest.dev.js' : 'latest.js';
				return {
					html,
					tags: [
						{
							tag: 'script',
							attrs: {
								async: true,
								src: `https://scripts.simpleanalyticscdn.com/${file}`
							},
							injectTo: 'head'
						}
					]
				};
			}
		}
	]
}));
