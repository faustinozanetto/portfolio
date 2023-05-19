'use client';

import Button from '@modules/ui/components/buttons/button';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <Button aria-label="Toggle Theme" className="h-10 w-10 px-2" variant="ghost" onClick={handleThemeChange}>
      {/* Sun Icon */}
      <svg
        className="h-6 w-6 rotate-0 scale-100 stroke-neutral-900 transition-all dark:scale-0"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        viewBox="0 0 24 24"
        height="35"
        width="35"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
      {/* Moon Icon */}
      <svg
        className="absolute h-6 w-6 scale-0 stroke-neutral-50 transition-all dark:scale-100"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        viewBox="0 0 24 24"
        height="35"
        width="35"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    </Button>
  );
};

export default ThemeToggler;
