import ProjectCard from '@modules/projects/components/cards/project-card';
import type { Project } from '@modules/projects/types/projects.types';
import React from 'react';

import Section from '../../section/section';

interface IHomeProjectsProp {
  projects: Project[];
}

const HomeProjects: React.FC<IHomeProjectsProp> = (props) => {
  const { projects } = props;
  return (
    <Section alternateColors>
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-primary-500 dark:text-primary-300 sm:text-5xl">Projects</h2>
        {/* Text */}
        <p className="text-center text-base font-medium sm:text-lg">
          Below are a collection of my personal and profesional projects I have completed in my past years of
          experience. You will encounter with different areas such as web development or computer graphics, using a
          broad varierty of programming languages and technologies like C++ or Typescript.
        </p>

        {/* Projects */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default HomeProjects;
