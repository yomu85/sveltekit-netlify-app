import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const production = process.env.NODE_ENV === 'production'

function babelOptions() {
  return {
    plugins: production 
    ? ['transform-remove-console'] 
    : []
  }
}

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
		},
		babel: babelOptions()
	})
};

export default config;