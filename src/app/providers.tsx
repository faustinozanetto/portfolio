'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-theme-kit';

const queryClient = new QueryClient();

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider useLocalStorage useSystem={false}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
