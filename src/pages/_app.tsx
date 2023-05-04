import '@styles/global.css';
import '@styles/code-blocks.css';
import 'katex/dist/katex.css';

import ThemeProvider from '@modules/theme/context/theme-context';
import { Analytics } from '@vercel/analytics/react';
import { domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import React from 'react';

type PortfolioProps = AppProps;

const InterFont = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <main className={`${InterFont.variable} scroll-smooth font-sans antialiased`}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </LazyMotion>
  );
};

export default Portfolio;
