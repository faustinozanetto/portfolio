import React from 'react';
import { Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';

const About = ({}) => {
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
          <VStack>
            <Heading>Hello, I´m Faustino Zanetto</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate molestias deleniti praesentium numquam laboriosam
              dolores ab impedit consectetur blanditiis sequi optio non, ipsum
              deserunt corrupti autem rerum placeat necessitatibus tempore
              repudiandae voluptatum! Doloremque, molestiae? Eveniet nisi,
              dolorem doloremque nihil necessitatibus repellendus, laudantium
              fugit, vero voluptatibus illum commodi facere quae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate molestias deleniti praesentium numquam laboriosam
              dolores ab impedit consectetur blanditiis sequi optio non, ipsum
              deserunt corrupti autem rerum placeat necessitatibus tempore
              repudiandae voluptatum! Doloremque, molestiae? Eveniet nisi,
              dolorem doloremque nihil necessitatibus repellendus, laudantium
              fugit, vero voluptatibus illum commodi facere quae!
            </Text>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default About;
