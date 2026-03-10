import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zen: {
          DEFAULT: '#2A9B96',
          dark: '#2C6262',
          light: '#50B5A2',
        },
        lime: '#2A9B96', // Kept lime variable mapped to primary teal temporarily to avoid instant breaks
        black: '#000',
        dark: '#141414',
        gray: {
          DEFAULT: '#777',
          light: '#e8e8e8',
          bg: '#f8f8f8',
        },
      },
      fontFamily: {
        heading: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        accent: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '10px',
        lg: '12px',
        xl: '40px',
        pill: '50px',
      },
      boxShadow: {
        card: '0 5px 30px rgba(0,0,0,0.04)',
        el: '0 10px 30px rgba(2,6,23,0.12)',
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
}
export default config
