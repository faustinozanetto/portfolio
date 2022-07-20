import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';
import Container from '@modules/ui/components/container/container';
import React from 'react';
import SectionDivider from '@modules/sections/components/section/divider/section-divider';
import Flex from '@modules/ui/components/flex/flex';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <Flex flexDirection="column" width="100%">
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects />
    </Flex>
  );
};

export default HomeView;
