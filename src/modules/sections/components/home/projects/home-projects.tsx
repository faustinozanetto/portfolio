import { HOME_PROJECTS } from '@data/projects/projects-data';
import React from 'react';

import Section from '../../section/section';
import HomeProjectCard from './project-card/home-project-card';

const HomeProjects: React.FC = () => {
  return (
    <Section className="bg-neutral-200 dark:bg-neutral-800">
      <div className="flex flex-col items-center justify-center space-y-4 text-justify  text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-500 dark:text-blue-300 sm:text-5xl">Projects</h2>
        {/* Text */}
        <p className="text-base font-medium sm:text-lg">
          Below are a collection of my personal and profesional projects I have completed in my past years of
          experience. You will encounter with different areas such as web development or computer graphics, using a
          broad varierty of programming languages and technologies like C++ or Typescript.
        </p>

        {/* Projects */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {HOME_PROJECTS.map((project, index) => {
            return <HomeProjectCard key={index} projectData={project} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default HomeProjects;
