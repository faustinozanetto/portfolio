import '@styles/global.css';
import '@styles/code-blocks.css';
import 'katex/dist/katex.css';

import ThemeProvider from '@modules/theme/context/theme-context';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import React from 'react';

type PortfolioProps = AppProps;

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LazyMotion>
  );
};

export default Portfolio;
