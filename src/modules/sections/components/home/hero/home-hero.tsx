import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';
import React from 'react';
import Button from '@modules/ui/components/buttons/button';
import Box from '@modules/ui/components/box/box';
import Section from '@modules/sections/components/section';
import HomeHeroSubtitle from './subtitle/home-hero-subtitle';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Section>
      <Flex flexDirection="column">
        {/* Titles */}
        <Box width="fit-content">
          <Heading as="h1" fontSize="6xl" textAlign="left" margin="0">
            Hi, I'm Faustino a
          </Heading>
          <HomeHeroSubtitle>Software Developer</HomeHeroSubtitle>
        </Box>
        {/* Paragraph */}
        <Text fontSize="xl" fontWeight="normal" textAlign="left">
          I am a young software developer from Argentina that fell in love with programming years ago. My primary focus
          is on web development, but I am also interested in computer graphics and game development.
        </Text>
        {/* Buttons */}
        <Flex>
          <Button size="md">Contact Me</Button>
          <Button variant="outline" size="md" color="white" hoverColor="black" hoverBackgroundColor="#ecfeff">
            Check my Work
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
};

export default HomeHero;
