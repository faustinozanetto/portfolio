import BaseLayout from '@modules/layouts/components/base/base-layout';
import ProjectShowcase from '@modules/projects/components/showcase/project-showcase';
import { getAllProjectsSlugs, getProjectBySlug } from '@modules/projects/lib/project-utils';
import type { Project } from '@modules/projects/types/projects.types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type ProjectPageProps = {
  project: Project;
};

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const { project } = props;
  return (
    <BaseLayout
      headProps={{
        title: `${project.metadata.title} | Faustino Zanetto`,
      }}
    >
      <ProjectShowcase project={project} />
    </BaseLayout>
  );
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
  const { params } = context;

  if (params === undefined) return { notFound: true };

  const slug: string = params.slug as string;

  try {
    const project = await getProjectBySlug({ slug });
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
