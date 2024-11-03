/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
  	extend: {
  		transitionProperty: {
  			colors: 'background-color, border-color, color',
  			shadow: 'box-shadow'
  		},
  		transitionTimingFunction: {
  			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	screens: {
  		sm: '480px',
  		md: '768px',
  		lg: '976px',
  		xl: '1440px'
  	},
  	colors: {
  		primaryGreen: '#1ABC9C',
  		customRed: '#CD4347',
  		green: '#cd4347',
  		'green-dark': '#047558',
  		textBlack: '#312F2F',
  		textWhite: '#F8F8F8',
  		black: '#000000',
  		'gray-dark': '#273444',
  		gray: '#8492a6',
  		'gray-light': '#d3dce6',
  		'light-blue': '#e8f8f4'
  	},
  	fontFamily: {
  		fontFamily: {
  			sans: ["Inter", "sans-serif"],
  			serif: ["Merriweather", "serif"],
  			monsterrat: ["Montserrat", "sans-serif"],
  			raleway: ["Raleway", "sans-serif"],
  			roboto: ["Roboto", "sans-serif"]
  		}
  	},
  	boxShadow: {
  		widget: '3px 3px #b9c3c1',
  		'widget-hover': '5px 5px #b9c3c1'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
