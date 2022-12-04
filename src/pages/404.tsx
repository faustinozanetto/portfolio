import React from 'react';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import NotFoundView from '@views/not-found/not-found-view';

interface INotFoundPageProps {}

const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
  const {} = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Page not found | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <NotFoundView />
    </BaseLayout>
  );
};

export default NotFoundPage;
