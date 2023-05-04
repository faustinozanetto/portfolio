import { useThemeContext } from '@modules/theme/context/theme-context';
import { IconButton } from '@modules/ui/components/icon-button/icon-button';
import React from 'react';

const ThemeToggler: React.FC = () => {
  const { theme, toggle } = useThemeContext();

  const renderTogglerIcon = () => {
    if (theme === 'dark')
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-neutral-900 dark:stroke-neutral-100"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
      );
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-neutral-900 dark:stroke-neutral-50"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    );
  };

  return (
    <IconButton size="sm" variant="outline" aria-label="Toggle Theme" onClick={toggle} icon={renderTogglerIcon()} />
  );
};

export default ThemeToggler;
