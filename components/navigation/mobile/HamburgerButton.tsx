import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onToggle,
}) => {
  const getIcon = () => {
    return isOpen ? <CloseIcon /> : <HamburgerIcon />;
  };
  return (
    <>
      <IconButton
        onClick={onToggle}
        icon={getIcon()}
        variant='ghost'
        aria-label='Toggle Mobile Navigation'
      ></IconButton>
    </>
  );
};
