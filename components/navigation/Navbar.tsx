import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { NAVBAR_LINKS } from '../../data';
import { HamburgerButton } from './HamburgerButton';
import { NavbarAvatar } from './NavbarAvatar';
import { NavbarLink } from './NavbarLink';
import { ThemeToggleButton } from './ThemeToggleButton';

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
      >
        <Container as={Flex} maxW='2xl'>
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
            <Heading
              color={useColorModeValue('gray.800', 'white')}
              fontSize='3xl'
              fontWeight='bold'
              mb={1.5}
            >
              Faustino
            </Heading>
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
    </Box>
  );
};
