import '@fontsource/ibm-plex-sans';
import React from 'react';
import type { AppProps } from 'next/app';
import { lightTheme } from '@styles/global-styles';
import GlobalStyles from '@styles/global-styles';
import { ThemeProvider } from 'styled-components';

type PortfolioProps = AppProps & {};

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  );
};

export default Portfolio;
