import React from 'react';
import BaseLayout from '@components/layouts/base/base-layout';

type HomePageProps = {
  children: React.ReactNode;
};

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <BaseLayout>
      <h1>hi</h1>
    </BaseLayout>
  );
};

export default HomePage;
