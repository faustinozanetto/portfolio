import React from 'react';
import { Button } from '@chakra-ui/react';
import { NavbarLinkType } from '../../../types/navbar';
import { useRouter } from 'next/router';

interface HamburgerLinkProps {
  data: NavbarLinkType;
}

export const HamburgerLink: React.FC<HamburgerLinkProps> = ({ data }) => {
  const router = useRouter();
  return (
    <Button
      width='full'
      onClick={() => {
        router.push(data.href);
      }}
    >
      {data.label}
    </Button>
  );
};
