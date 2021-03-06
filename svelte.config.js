import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    adapter: adapter()
  },
	preprocess: preprocess({
		postcss: {
			plugins: [
				autoprefixer()
			],
		},
		scss: {
			prependData: `@import './src/scss/main.scss';`,
		}
	})
};

export default config;