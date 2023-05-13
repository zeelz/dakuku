/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  brandred: '#B31F2D',
		  brandredlight: '#D61325',
		  clustterMilk: '#FCF2E3',
		  clustterTorquoise: '#6CFFFC'
		},
		fontFamily: {
		  sans: ['Darker Grotesque', 'sans-serif']
		},
		fontSize: {
		  sm: '0.95rem',
		  base: ['1.25rem', '1.3rem'],
		  xl: '1.45rem',
		  '2xl': ['1.75rem', '1.5rem'],
		  '3xl': ['2rem', '1.75rem'],
		  '4xl': ['2.5rem', '2rem'],
		  '5xl': ['3.75rem', '3rem'],
		  '6xl': ['4rem', '3.25rem']
		},
		backgroundImage: {
			// 'hero': "url('../public/images/dap-6.jpg')", #bg-hero
		  }
	  },
	},
	plugins: [
		require('@tailwindcss/forms')
	],
  }