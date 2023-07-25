'use client';

import { ThemeProvider } from 'next-theme-kit';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider useLocalStorage useSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
