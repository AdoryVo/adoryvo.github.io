const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./views/**/*.ejs', './public/scripts/*.js'],
	darkMode: 'media',
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#2a3b4a',
				secondary: colors.slate,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
