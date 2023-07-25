'use client';

import type { ProjectData } from '@modules/projects/types/projects.types';
import { motion } from 'framer-motion';
import React from 'react';
import ProjectShowcaseThumbnail from './project-showcase-thumbnail';

type ProjectShowcaseThumbnailsProps = {
  thumbnails: ProjectData['thumbnails'];
};

const ProjectShowcaseThumbnails: React.FC<ProjectShowcaseThumbnailsProps> = (props) => {
  const { thumbnails } = props;

  return (
    <div className="mt-4 grid gap-4 md:mt-6 md:grid-cols-2 lg:mt-8 items-center w-full">
      {thumbnails.length > 0 &&
        thumbnails.map((thumbnail, index) => (
          <motion.div
            // eslint-disable-next-line react/no-array-index-key
            key={`thumb-${index}`}
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.25 + 0.15 * index,
            }}
            className="justify-center flex cursor-pointer"
          >
            <ProjectShowcaseThumbnail thumbnail={thumbnail} />
          </motion.div>
        ))}
    </div>
  );
};

export default ProjectShowcaseThumbnails;
