import Box from '@modules/ui/components/box/box';
import Heading from '@modules/ui/components/heading/heading';
import React from 'react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Box>
      <Heading as="h1" size="4xl" weight="bold">
        Faustino Zanetto
      </Heading>
    </Box>
  );
};

export default HomeHero;
