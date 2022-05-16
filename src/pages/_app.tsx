import React from 'react';
import { AppProps } from 'next/app';
import globalStyles, { darkTheme, lightTheme } from '@styles/global-styles';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global-styles';
import useTheme from '@hooks/theming/use-theme.hook';

type PortfolioProps = AppProps & {};

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;
  const { theme } = useTheme();

  const selectTheme = () => {
    if (theme === 'dark') {
      return darkTheme;
    }
    return lightTheme;
  };

  return (
    <ThemeProvider theme={selectTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Portfolio;
