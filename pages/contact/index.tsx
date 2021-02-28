import React from 'react';
import {
  Box,
  Container,
  Heading,
  Spacer,
  Flex,
  useColorModeValue,
  Image,
  Text,
} from '@chakra-ui/react';
import { ContactForm } from '../../components/forms';

const Contact = ({}) => {
  return (
    <>
      <Container
        maxW='5xl'
        py={['1em', '1em', '2em', '3em', '3em']}
        centerContent
      >
        <Flex
          flexDir={['column', 'column', 'row', 'row', 'row']}
          align={['center']}
        >
          {/* Left */}
          <Flex
            flexDir='column'
            maxWidth={['full', 'full', '50%', '50%', '50%']}
          >
            <Heading as='h1'>Need to ask me something?</Heading>
            <Heading as='h2' fontSize='3xl' fontWeight='500'>
              Feel free to Contact Me!
            </Heading>
            <Text pb={4}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              architecto non ipsa quia libero iste ullam aliquam, commodi cumque
              molestias.
            </Text>

            <Image
              src='https://www.infosoluciones.cl/wp-content/uploads/2020/08/photo-1560305527-51dc8ad5a8f8.jpg'
              alt='Contact Image'
              width='auto'
              height='auto'
              borderRadius='xl'
            />
          </Flex>
          <Spacer />

          {/* Right */}
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            width={['100%', '75%', '45%', '45%', '45%']}
            shadow='base'
            mt={['1em', '1em', '0']}
            p={4}
            rounded='lg'
          >
            <ContactForm />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Contact;
