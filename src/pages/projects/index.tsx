import BaseLayout from '@modules/layouts/components/base/base-layout';
import type { GetStaticProps } from 'next';
import React from 'react';

interface IProjectsPageProps {}

const ProjectsPage: React.FC<IProjectsPageProps> = (props) => {
  const {} = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Projects | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      hi
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default ProjectsPage;
