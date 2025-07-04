import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans Variable', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: []
} satisfies Config;
