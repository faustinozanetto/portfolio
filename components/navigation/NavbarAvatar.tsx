import React from 'react';
import { Avatar } from '@chakra-ui/react';

interface NavbarAvatarProps {}

export const NavbarAvatar: React.FC<NavbarAvatarProps> = ({}) => {
  return (
    <>
      <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </>
  );
};
