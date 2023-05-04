import type { ProjectData } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import React from 'react';

import ProjectCardTechnologies from '../cards/project-card-technologies';

type ProjectShowcaseMetadataProps = {
  metadata: ProjectData;
};

const ProjectShowcaseMetadata: React.FC<ProjectShowcaseMetadataProps> = (props) => {
  const { metadata } = props;
  const { title, description, technologies } = metadata;

  return (
    <div className="flex w-full flex-col">
      <m.h1
        className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-primary-500 dark:text-primary-300 md:mb-4 md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
      >
        {title}
      </m.h1>

      {/* Description */}
      <m.p
        className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
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
      </m.p>

      {/* Technologies */}
      <m.div
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
        <span className="font-semibold text-neutral-900 dark:text-neutral-100">Technologies: </span>
        <ProjectCardTechnologies technologies={technologies} />
      </m.div>
    </div>
  );
};

export default ProjectShowcaseMetadata;
