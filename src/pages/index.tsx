import React from 'react';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import HomeView from '@views/home/home-view';

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
      <HomeView />
    </BaseLayout>
  );
};

export default HomePage;
