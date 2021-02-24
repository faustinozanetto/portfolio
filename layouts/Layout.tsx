import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../components/navigation';
import { Footer } from '../components/footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
