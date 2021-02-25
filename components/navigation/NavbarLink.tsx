import React from 'react';
import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { NavbarLinkType } from '../../types/navbar';

interface NavbarLinkProps {
  data: NavbarLinkType;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ data }) => {
  return (
    <>
      <Box>
        <Link
          fontWeight={500}
          color={useColorModeValue('gray.600', 'gray.200')}
          href={data.href}
          _hover={{
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          {data.label}
        </Link>
      </Box>
    </>
  );
};
