import HomeHero from '@modules/sections/home/home-hero';
import Container from '@modules/ui/components/container/container';
import React from 'react';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <Container>
      <HomeHero />
    </Container>
  );
};

export default HomeView;
