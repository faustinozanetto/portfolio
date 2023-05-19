'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';
import React from 'react';

type ThemeProviderProps = NextThemeProviderProps;

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, ...rest } = props;

  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
