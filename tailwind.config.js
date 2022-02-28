/* eslint-disable no-undef */
module.exports = {
	purge: {
		enabled: true,
		content: ["./**/*.html"]
	},
	theme: {
		container: {
			center: true,
			padding: {
				xl: '0rem',
				lg: '0rem',
				md: '0rem',
				xs: '0rem',
			},
			screens: {
				'2xl': '1496px',
			},
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1.05rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '1px',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px',
			12: '12px',
			14: '14px',
			16: '16px',
			18: '18px',
		},
		screens: {
			xs: { max: '639px' },
			// => @media (min-width: 0px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'3xl': '2200px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			gridTemplateColumns: {
				16: 'repeat(16, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				//comparador: 'auto auto 55px',
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
			inset: {
				13: '3.25rem',
				26: '6.5rem',
				27: '7rem',
				28: '7.5rem',
				29: '8rem',
				68: '17rem',
				76: '19rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
				104: '26rem',
				108: '27rem',
				112: '28rem',
				116: '29rem',
				120: '30rem',
				124: '31rem',
				128: '32rem',
				132: '33rem',
				136: '34rem',
				138: '35rem',
				142: '36rem',
				146: '37rem',
				150: '38rem',
				154: '39rem',
				158: '40rem',
			},
			spacing: {
				13: '3.25rem',
				76: '19rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
				102: '25rem',
				106: '26rem',
				110: '30rem',
				112: '35rem',
				122: '40rem',
				134: '50rem',
				146: '60rem',
				158: '70rem',
			},
			colors: {
				azulBrand: '#114572',
				verdeBrand: '#718D7A',
				completed: '#838919',
				success: '#B4D484',
				azul: {
					50: '#f3f6f8',
					100: '#e7ecf1',
					200: '#c4d1dc',
					300: '#a0b5c7',
					400: '#587d9c',
					500: '#114572',
					600: '#0f3e67',
					700: '#0d3456',
					800: '#0a2944',
					900: '#082238',
				},
				verde: {
					50: '#f8f9f8',
					100: '#f1f4f2',
					200: '#dce3de',
					300: '#c6d1ca',
					400: '#9cafa2',
					500: '#718d7a',
					600: '#667f6e',
					700: '#556a5c',
					800: '#445549',
					900: '#37453c',
				},
				salmon: {
					50: '#fff8f8',
					100: '#fff2f0',
					200: '#ffdedb',
					300: '#ffcac5',
					400: '#ffa299',
					500: '#ff7a6d',
					600: '#e66e62',
					700: '#bf5c52',
					800: '#994941',
					900: '#7d3c35',
				},

			},
		},
	},

	plugins: [require('@tailwindcss/aspect-ratio')],
}
