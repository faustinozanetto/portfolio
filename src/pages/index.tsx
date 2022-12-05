import React from 'react';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const {} = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Home Page',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects />
    </BaseLayout>
  );
};

export default HomePage;
