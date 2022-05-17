import React from 'react';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '@styles/global-styles';
import GlobalStyles from '@styles/global-styles';
import { ThemeProvider } from 'styled-components';
import useTheme from '@hooks/use-theme';

type PortfolioProps = AppProps & {};

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;
  const [theme] = useTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  );
};

export default Portfolio;
