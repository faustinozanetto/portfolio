import BaseLayout from '@modules/layouts/components/base/base-layout';
import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';
import { useTheme } from '@modules/theme/context/theme-context';
import React from 'react';

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const {} = props;
  const { toggle } = useTheme();

  return (
    <BaseLayout
      headProps={{
        title: 'Home Page',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <button onClick={toggle}>Toggle Theme</button>
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects />
    </BaseLayout>
  );
};

export default HomePage;
