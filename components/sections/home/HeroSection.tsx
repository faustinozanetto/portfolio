import React from 'react';
import {
  Box,
  useColorModeValue,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const router = useRouter();
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW='5xl' py={{ base: 12, sm: 16, md: 20 }} centerContent>
        <Flex flexDir={['column', 'column', 'row', 'row', 'row']}>
          <Flex
            flexDir='column'
            maxWidth={['full', 'full', '50%', '50%', '50%']}
            mr={['0', '0', '1em', '2em', '2em']}
          >
            <Heading textAlign='left' fontSize={['4xl', '4xl', '5xl']} pb={4}>
              Hi, I am Faustino Zanetto
            </Heading>
            <Text textAlign='left'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis dolorem, magni alias aut fugit obcaecati nobis aliquam
              deleniti ipsam, vitae iure dolor sed facilis! Laudantium.
            </Text>
            <Spacer />
            <Flex
              py={4}
              justifyContent={[
                'center',
                'center',
                'inherit',
                'inherit',
                'inherit',
              ]}
            >
              <Button
                onClick={() => {
                  router.push('/about');
                }}
              >
                More About Me
              </Button>
            </Flex>
          </Flex>
          <Spacer />

          <Box boxShadow='2xl'>
            <Image
              src='./heroPhoto.jpg'
              alt='Hero Photo'
              w='100%'
              height='100%'
              borderRadius='lg'
              objectFit='cover'
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
