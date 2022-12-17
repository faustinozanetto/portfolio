import '@fontsource/ibm-plex-sans';
import '@styles/global.css';

import ThemeProvider from '@modules/theme/context/theme-context';
import GlobalStyles from '@styles/global-styles';
import type { AppProps } from 'next/app';
import React from 'react';

type PortfolioProps = AppProps;

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Portfolio;
