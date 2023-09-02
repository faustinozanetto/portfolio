'use client';

import ProjectsFeed from '@modules/projects/components/projects-feed';
import type { Project } from '@modules/projects/types/projects.types';
import { motion } from 'framer-motion';
import React from 'react';

import Link from 'next/link';
import Section from '../../section/section';

type HomeProjectsProps = {
  projects: Project[];
};

const HomeProjects: React.FC<HomeProjectsProps> = (props) => {
  const { projects } = props;
  return (
    <Section className="z-20" alternateColors id="projects">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
        className="mb-2 text-4xl font-extrabold text-primary md:mb-4 md:text-5xl"
      >
        Some of My Projects
      </motion.h2>
      {/* Text */}
      <motion.p
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
        className="mb-2 md:mb-4 md:text-lg"
      >
        Below, you will find a compilation of both my personal and professional projects, representing my diverse range
        of experience accumulated over the years. These projects span various domains, including web development and
        computer graphics. Learn more at{' '}
        <Link href="/projects" title="Projects" className="underline decoration-primary decoration-2">
          Projects
        </Link>
        .
      </motion.p>

      {/* Projects */}
      <ProjectsFeed projects={projects} />
    </Section>
  );
};

export default HomeProjects;
