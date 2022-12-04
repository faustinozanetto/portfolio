import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "IBM Plex Sans", sans-serif;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const lightTheme = {
  colors: {
    primary: {
      50: '#dbeafe',
      100: '#bfdbfe',
      200: '#93c5fd',
      300: '#60a5fa',
      400: '#3b82f6',
      500: '#2563eb',
      600: '#1d4ed8',
      700: '#1e40af',
      800: '#1e3a8a',
    },
    background: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    text: '#e4e4e7',
  },
  fontFamily: {
    body: '"Gotham", sans-serif',
  },
  spacing: {
    xs: '0.35rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '2rem',
    '2xl': '4rem',
    '3xl': '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  breakPoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
  transitions: {
    default: 'all 0.2s',
  },
};

export const darkTheme = {
  colors: {
    background: '#333',
    color: '#fafafa',
  },
};

export default GlobalStyles;
