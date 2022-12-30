import BaseLayout from '@modules/layouts/components/base/base-layout';
import ProjectsFeed from '@modules/projects/components/projects-feed';
import { getAllProjects } from '@modules/projects/lib/project-utils';
import type { Project } from '@modules/projects/types/projects.types';
import Section from '@modules/sections/components/section/section';
import type { GetStaticProps } from 'next';
import React from 'react';

interface IProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<IProjectsPageProps> = (props) => {
  const { projects } = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Projects | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 sm:my-10 md:my-14">
        <div className="flex flex-col space-y-4 text-neutral-900 dark:text-neutral-100 sm:space-y-8">
          {/* Titles */}
          <h2 className="text-center text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300 sm:text-4xl md:text-5xl">
            Take a look at all the projects I&apos;ve worked on!
          </h2>

          {/* Paragraph */}
          <p className="text-base font-medium sm:text-lg">
            Look through my latest post in my blog to stay up to date with new projects and news about my personal and
            profesional carreer in the it industry. You&apos;ll find posts detailing the development of my personal
            projects and other topics.
          </p>

          <ProjectsFeed projects={projects} />
        </div>
      </Section>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects();
  return { props: { projects } };
};

export default ProjectsPage;
