import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface ThemeToggleButtonProps {}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        aria-label='Color Mode'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant='ghost'
      />
    </>
  );
};
