import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';
import Container from '@modules/ui/components/container/container';
import React from 'react';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <Container>
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects />
    </Container>
  );
};

export default HomeView;
