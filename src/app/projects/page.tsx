'use client';

import React from 'react';

import ProjectsFeed from '@modules/projects/components/projects-feed';
import { getAllProjects } from '@modules/projects/lib/project-utils';
import { motion } from 'framer-motion';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="container mx-auto my-8 w-full max-w-5xl items-start justify-center p-4 md:my-12 md:max-w-6xl md:p-8 lg:my-16 lg:max-w-7xl">
      {/* Titles */}
      <motion.h1
        className="mb-2 text-4xl font-extrabold text-primary-600 dark:text-primary-300 md:mb-4 md:text-5xl"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
      >
        Take a look at all the projects I&apos;ve worked on!
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
      >
        Here, you will find a showcase of the diverse range of projects I have worked on throughout my journey as a web
        developer. Each project represents a unique challenge and an opportunity for me to demonstrate my skills,
        creativity, and passion for crafting exceptional web experiences.
      </motion.p>

      <ProjectsFeed projects={projects} />
    </section>
  );
}
