import Box from '@modules/ui/components/box/box';
import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';
import NextImage from 'next/image';
import React from 'react';
import Button from '@modules/ui/components/buttons/button';
import { useTheme } from 'styled-components';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;
  const theme = useTheme();

  return (
    <Flex flexDirection="row">
      {/* Left */}
      <Box>
        <NextImage
          src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Hero Photo"
          width={600}
          height={1000}
          objectFit="cover"
        />
      </Box>
      {/* Right */}
      <Flex flexDirection="column">
        <Heading as="h1" fontSize="6xl" textAlign="left" paddingLeft="1rem" margin="0">
          Hi, I'm
        </Heading>

        <Heading as="h1" fontSize="6xl" fontWeight="bold" textAlign="left" paddingLeft="1rem" margin="0">
          Faustino
        </Heading>
        <Text fontSize="xl" fontWeight="normal" textAlign="left" paddingLeft="1rem">
          I am a young software developer from Argentina that fell in love with programming years ago. My primary focus
          is on web development, but I am also interested in computer graphics and game development.
        </Text>
        <Flex>
          <Button color="black" hoverColor="white" backgroundColor="white" hoverBackgroundColor="#18181b">
            Contact Me
          </Button>
          <Button
            variant="outline"
            borderRadius="md"
            fontWeight="bold"
            fontSize="sm"
            margin="0.5rem"
            color={theme.colors.text}
            backgroundColor="white"
            hoverBackgroundColor="#18181b"
          >
            Check my Work
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeHero;
