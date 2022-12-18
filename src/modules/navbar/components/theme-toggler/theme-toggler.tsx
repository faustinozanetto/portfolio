import { useTheme } from '@modules/theme/context/theme-context';
import Button from '@modules/ui/components/buttons/button';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggler: React.FC = () => {
  const { theme, toggle } = useTheme();

  const themeIconColor = () => {
    return theme === 'dark' ? 'white' : 'dark';
  };

  const themeIcon = () => {
    if (theme === 'dark') return <FiSun size={18} color={themeIconColor()} />;
    return <FiMoon size={18} color={themeIconColor()} />;
  };

  return (
    <Button className="h-10 w-10" variant="outline" onClick={toggle}>
      <div className="inline-flex shrink-0 self-center">{themeIcon()}</div>
    </Button>
  );
};

export default ThemeToggler;
