// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
      gridTemplateColumns: {
        aboutMe: 'auto 1fr',
      },
      colors: {
        primary: colors.sky,
        secondary: colors.cyan,
        background: colors.zinc,
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.35,
          },
        },
      },
      animation: {
        blink: 'blink 1.4s linear infinite',
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
