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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        'background-alternate': 'hsl(var(--background-alternate))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      // colors: {
      //   secondary: colors.cyan,
      //   background: colors.zinc,
      //   border: 'hsl(var(--border))',
      //   primary: {
      //     50: '#eef6ff',
      //     100: '#d9eaff',
      //     200: '#bcdbff',
      //     300: '#8ec4ff',
      //     400: '#59a3ff',
      //     500: '#2979ff',
      //     600: '#1b5ef5',
      //     700: '#1449e1',
      //     800: '#173bb6',
      //     900: '#19368f',
      //     950: '#142357',
      //   },
      // },
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
        rotate: {
          '0%, 100%': {
            transform: 'translateX(-80px) translateY(40px) rotate(25deg)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0) rotate(0)',
          },
        },
      },
      animation: {
        blink: 'blink 1.4s linear infinite',
        'hero-background': 'rotate 10s linear infinite',
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
