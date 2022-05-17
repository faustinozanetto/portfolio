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
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
    },
    background: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    text: '#000',
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
    xxl: '2.5rem',
    xxxl: '3rem',
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
};

export const darkTheme = {
  colors: {
    background: '#333',
    color: '#fafafa',
  },
};

export default GlobalStyles;
