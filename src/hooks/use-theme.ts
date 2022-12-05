import { useEffect, useState } from 'react';
import type { ThemeVariant } from '../typedefs/portfolio.types';

const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeVariant>('light');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeVariant;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return [theme, themeToggler];
};

export default useDarkMode;
