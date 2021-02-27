import React from 'react';
import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { NAVBAR_LINKS } from '../../../data';
import { HamburgerLink } from './HamburgerLink';

interface HamburgerMenuProps {}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({}) => {
  return (
    <Box>
      <Stack
        display={['flex', 'flex', 'none', 'none', 'none']}
        bg={useColorModeValue('white', 'gray.800')}
        p={2}
      >
        {NAVBAR_LINKS.map((link, index) => {
          return <HamburgerLink key={index} data={link} />;
        })}
      </Stack>
    </Box>
  );
};
