import { getAllProjectsSlugs, getProjectBySlug } from '@modules/projects/lib/project-utils';
import type { Project } from '@modules/projects/types/projects.types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface IProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  const { project } = props;
  return <h1>{project.data.title}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjectsSlugs();
  const paths = projects.map((project) => {
    return {
      params: { slug: project.slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug: string = context.params.slug as string;

  try {
    const project = getProjectBySlug({ slug });
    return {
      props: {
        project,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default ProjectPage;
