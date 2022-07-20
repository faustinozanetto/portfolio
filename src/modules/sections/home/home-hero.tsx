import Box from '@modules/ui/components/box/box';
import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';
import NextImage from 'next/image';
import React from 'react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Flex flexDirection="row">
      {/* Left */}
      <Box>
        <NextImage
          src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Hero Photo"
          width={400}
          height={600}
          objectFit="cover"
        />
      </Box>
      {/* Right */}
      <Flex flexDirection="column">
        <Heading as="h1" fontSize="4xl" textAlign="left" paddingLeft="1rem" margin="0">
          Hi, I'm
        </Heading>

        <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="left" paddingLeft="1rem" margin="0">
          Faustino Zanetto
        </Heading>
        <Text fontSize="lg" fontWeight="normal" textAlign="left" paddingLeft="1rem">
          Full-stack web developer with a passion for building web applications.
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeHero;
