'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Project } from '@contentlayer/generated';
import ProjectCardTechnologies from '../cards/project-card-technologies';

type ProjectShowcaseMetadataProps = {
  project: Project;
};

const ProjectShowcaseMetadata: React.FC<ProjectShowcaseMetadataProps> = (props) => {
  const { project } = props;
  const { title, description, technologies } = project;

  return (
    <div className="flex w-full flex-col">
      <motion.h1
        className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-primary md:mb-4 md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
      >
        {title}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-sm mb-2 md:mb-4 md:text-lg md:mr-4"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.35,
        }}
      >
        {description}
      </motion.p>

      {/* Technologies */}
      <motion.div
        className="flex flex-wrap items-center gap-2"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.45,
        }}
      >
        <span className="font-semibold">Technologies: </span>
        <ProjectCardTechnologies technologies={technologies} />
      </motion.div>
    </div>
  );
};

export default ProjectShowcaseMetadata;
