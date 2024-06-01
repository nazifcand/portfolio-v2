import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
        },
        screens: {
          sm: '780px',
          md: '780px',
          lg: '780px',
          xl: '780px',
          '2xl': '780px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
