import '@styles/global.css';
import '@styles/code-blocks.css';

import ThemeProvider from '@modules/theme/context/theme-context';
import { Open_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';

const openSans = Open_Sans({ subsets: ['latin'] });

type PortfolioProps = AppProps;

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <ThemeProvider>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default Portfolio;
