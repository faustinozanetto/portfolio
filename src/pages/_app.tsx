import '@styles/global.css';
import '@styles/code-blocks.css';
import 'katex/dist/katex.css';

import ThemeProvider from '@modules/theme/context/theme-context';
import { Open_Sans } from '@next/font/google';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });

type PortfolioProps = AppProps;

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <LazyMotion features={domAnimation}>
      <main className={`${openSans.variable} font-sans`}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </LazyMotion>
  );
};

export default Portfolio;
