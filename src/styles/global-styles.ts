import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Gotham book',sans-serif;
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    @font-face {
    font-family: 'Gotham';
    src: url('https://assets.website-files.com/611153e7af981472d8da199c/618d12179e08334c55bee117_Gotham-Medium_Web.woff') format('woff'), url('https://assets.website-files.com/611153e7af981472d8da199c/618d12179e08334c55bee117_Gotham-Medium_Web.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham book';
    src: url('https://assets.website-files.com/611153e7af981472d8da199c/618d13b9edde405c59e4bb52_Gotham-Book_Web.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham';
    src: url('https://assets.website-files.com/611153e7af981472d8da199c/618d14182d50f51bead24130_Gotham-Black_Web.woff') format('woff'), url('https://assets.website-files.com/611153e7af981472d8da199c/61279586c65ee060197ee946_Gotham-Black.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham';
    src: url('https://assets.website-files.com/611153e7af981472d8da199c/618d1418edde400d84e4bc68_Gotham-Bold_Web.woff') format('woff'), url('https://assets.website-files.com/611153e7af981472d8da199c/61279587b5f12a4ada6104ca_Gotham-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham';
    src: url('https://assets.website-files.com/611153e7af981472d8da199c/618d1418e59ca100336201e9_Gotham-Light_Web.woff') format('woff'), url('https://assets.website-files.com/611153e7af981472d8da199c/612795874b798960f30c2f72_Gotham-XLight.otf') format('opentype'), url('https://assets.website-files.com/611153e7af981472d8da199c/61279587dcddd33326f94ef3_Gotham-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham';
    src: url('https://assets.website-files.com/611153e7af981472d8da199c/618d141864e72c3b43c9f3e7_Gotham-Thin_Web.woff') format('woff'), url('https://assets.website-files.com/611153e7af981472d8da199c/61279587d9dd6688ff38050b_Gotham-Thin.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
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
    xxl: '4rem',
    xxxl: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    xxl: '1rem',
    xxxl: '1.5rem',
    full: '9999px',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '5rem',
    '6xl': '6rem',
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
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
