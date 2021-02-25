import React from 'react';
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface ThemeToggleButtonProps {}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Tooltip label='Toggle Color Mode' aria-label='Toggle Color Mode'>
        <IconButton
          aria-label='Color Mode'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant='ghost'
        />
      </Tooltip>
    </>
  );
};
