import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from '../logo';
import { NAVBAR_LINKS } from '../../data';
import { NavbarLink } from '../navigation';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      as='footer'
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray.500')}
      py={6}
      flexShrink={0}
    >
      {/* Top */}
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Logo />
        <Stack direction={'row'} spacing={6}>
          {NAVBAR_LINKS.map((link, index) => {
            return <NavbarLink key={index} data={link} />;
          })}
        </Stack>
      </Container>

      {/* Bottom */}
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify='center'
          align='center'
        >
          <Text>
            Made with ❤️ on 🇦🇷 by <Link href=''>Faustino Zanetto</Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
