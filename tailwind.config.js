const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		enabled: true,
		content: [
			'./views/**/*.ejs',
			'./dist/scripts/*.js'
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#2a3b4a',
				secondary: colors.blueGray
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
};
