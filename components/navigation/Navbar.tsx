import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { NAVBAR_LINKS } from '../../data';
import { NavbarAvatar } from './NavbarAvatar';
import { NavbarLink } from './NavbarLink';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      as='nav'
      flexDir='row'
      alignItems='center'
      justifyContent='center'
      height='60px'
      bgColor={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      p='1rem'
    >
      <Container as={Flex} maxW='5xl' align={'center'}>
        <HStack d='flex'>
          <Box d='flex' flex={1}></Box>
          <Box d='flex' flex={1}>
            <Heading>Faustino</Heading>
          </Box>
          {/* Links */}
          <Flex>
            <HStack>
              {NAVBAR_LINKS.map((link, index) => {
                return <NavbarLink key={index} data={link} />;
              })}
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Flex>
  );
};
