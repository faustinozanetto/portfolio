import type { ThemeVariant } from '@types/portfolio.types';
import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeVariant>('light');

  /**
   * Toggles the theme.
   */
  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
