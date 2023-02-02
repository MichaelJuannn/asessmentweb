/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				success: '#BCFFCB',
				main: {
					DEFAULT: '#004375',
					2: '#002948',
				},
			},
		},
	},
	plugins: [require('daisyui')],
};
