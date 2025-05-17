import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#DCD8D9',
        'gray': '#ABA5A3',
        'volt': '#CBFF22',
        'black': '#000000',
        'white': '#ffffff',
      },
      keyframes: {
        'blur-in': {
          '0%': { backdropFilter: 'blur(0px)' },
          '100%': { backdropFilter: 'blur(6px)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'blur-in': 'blur-in 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards'
      },
      spacing: {
        'xs-sp': '2px',
        'sm-sp': '4px',
        'md-sp': '8px',
        'lg-sp': '16px',
        'xl-sp': '32px',
      },
      fontSize: {
        'xs': ['clamp(0.75rem, 1vw + 0.5rem, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 1vw + 0.75rem, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 1.5vw + 0.875rem, 1.25rem)', { lineHeight: '1.4' }],
        'lg': ['clamp(1.25rem, 2vw + 1rem, 2rem)', { lineHeight: '1.3' }],
        'xl': ['clamp(1.5rem, 3vw + 1.5rem, 3.5rem)', { lineHeight: '1.1' }],
      },
      fontFamily: {
        sans: ['var(--font-instrument-sans)'],
        serif: ['var(--font-instrument-serif)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config; 