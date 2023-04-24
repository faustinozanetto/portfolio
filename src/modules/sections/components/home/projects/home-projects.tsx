import ProjectsFeed from '@modules/projects/components/projects-feed';
import type { Project } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

type HomeProjectsProps = {
  projects: Project[];
};

const HomeProjects: React.FC<HomeProjectsProps> = (props) => {
  const { projects } = props;
  return (
    <Section>
      {/* Heading */}
      <m.h2
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
        className="mb-2 text-3xl font-extrabold text-primary-500 dark:text-primary-300 md:mb-4 md:text-4xl lg:text-5xl"
      >
        Some of My Projects
      </m.h2>
      {/* Text */}
      <m.p
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
        className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
      >
        Below are a collection of my personal and profesional projects I have completed in my past years of experience.
        You will encounter with different areas such as web development or computer graphics, using a broad varierty of
        programming languages and technologies like C++ or Typescript.
      </m.p>

      {/* Projects */}
      <ProjectsFeed projects={projects} />
    </Section>
  );
};

export default HomeProjects;
