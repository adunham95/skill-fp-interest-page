// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: ['mixpanel-browser'] // bundle this for SSR
			}
		}
	}
};

export default config;
