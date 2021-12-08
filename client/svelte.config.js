import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({ out: 'build' })
	},
	preprocess: [
		sveltePreprocess({
			postcss: true,
			typescript: true
		})
	]
};

export default config;
