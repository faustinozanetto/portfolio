import React from 'react';
import {
  Box,
  Collapse,
  Container,
  Flex,
  HStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { NAVBAR_LINKS } from '../../data';
import { HamburgerButton } from './mobile';
import { HamburgerMenu } from './mobile';
import { NavbarLink } from './NavbarLink';
import { ThemeToggleButton } from './ThemeToggleButton';
import { Logo } from '../logo';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const {
    isOpen: hamburgerIsOpen,
    onToggle: hamburgerOnToggle,
  } = useDisclosure();
  return (
    <Box>
      <Flex
        as='header'
        height='80px'
        width='full'
        top='0'
        alignItems='center'
        align={'center'}
        justifyContent='center'
        bgColor={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        zIndex='999'
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.75)',
            'rgba(26, 32, 44, 0.75)'
          ),
        }}
      >
        <Container as={Flex} maxW='5xl'>
          {/* Mobile Hamburger Button */}
          <Flex display={['flex', 'flex', 'none', 'none', 'none']}>
            <HamburgerButton
              isOpen={hamburgerIsOpen}
              onToggle={hamburgerOnToggle}
            />
          </Flex>

          {/* Avatar */}
          <Flex
            flex={[1, 1, 0, 0, 0]}
            alignItems='center'
            justifyContent='center'
            mr={[0, 0, 8, 8, 8]}
          >
            <Logo />
          </Flex>

          {/* Links */}
          <Flex flex={1} display={['none', 'none', 'flex', 'flex', 'flex']}>
            <HStack spacing={4} alignContent='center' justifyContent='center'>
              {NAVBAR_LINKS.map((link, index) => {
                return <NavbarLink key={index} data={link} />;
              })}
            </HStack>
          </Flex>

          {/* Theme Toggle Button */}
          <Flex>
            <ThemeToggleButton />
          </Flex>
        </Container>
      </Flex>

      {/* Mobile Hamburger Menu */}
      <Collapse in={hamburgerIsOpen}>
        <HamburgerMenu />
      </Collapse>
    </Box>
  );
};
