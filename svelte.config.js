import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			assets: 'https://web.staging.emerge.gunkulspectrum.co/svelte', // important for locating assets if using path rewriting in the server
			// base: '/s' // always required to use {base}/path/to/assets
			base: '/svelte',
		},
		 prerender: {
      // Implement handleHttpError for handling 404 errors
      handleHttpError({ request, response }) {
        if (response.status === 404) {
          response.headers['content-type'] = 'text/html';
          response.body = '<h1>Page Not Found</h1>'; // Customize this message as needed
        }
      },
    },
		
	},
};

export default config;
