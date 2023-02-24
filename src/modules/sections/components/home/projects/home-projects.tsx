import ProjectsFeed from '@modules/projects/components/projects-feed';
import type { Project } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

interface IHomeProjectsProp {
  projects: Project[];
}

const HomeProjects: React.FC<IHomeProjectsProp> = (props) => {
  const { projects } = props;
  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'tween',
            duration: 0.25,
          }}
          className="text-4xl font-extrabold text-primary-500 dark:text-primary-300 md:text-5xl"
        >
          Projects
        </m.h2>
        {/* Text */}
        <m.p
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.15,
          }}
          className="text-center text-base md:text-lg"
        >
          Below are a collection of my personal and profesional projects I have completed in my past years of
          experience. You will encounter with different areas such as web development or computer graphics, using a
          broad varierty of programming languages and technologies like C++ or Typescript.
        </m.p>

        {/* Projects */}
        <ProjectsFeed projects={projects} />
      </div>
    </Section>
  );
};

export default HomeProjects;
