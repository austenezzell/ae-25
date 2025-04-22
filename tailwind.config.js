/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-instrument-serif)'],
      },
      spacing: {
        'sm-sp': '1rem',    // 16px
        'md-sp': '2rem',    // 32px
        'lg-sp': '4rem',    // 64px
      },
      padding: {
        '4': '1rem',      // 16px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
      }
    },
  },
  plugins: [],
}; 