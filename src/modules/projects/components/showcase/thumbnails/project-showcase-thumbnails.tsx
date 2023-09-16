'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@contentlayer/generated';
import ProjectShowcaseThumbnail from './project-showcase-thumbnail';

type ProjectShowcaseThumbnailsProps = {
  thumbnails: Project['thumbnails'];
};

const ProjectShowcaseThumbnails: React.FC<ProjectShowcaseThumbnailsProps> = (props) => {
  const { thumbnails } = props;

  return (
    <div className="mt-4 gap-4 md:mt-6 lg:mt-8 grid sm:grid-cols-2 justify-normal items-stretch">
      {thumbnails.length > 0 &&
        thumbnails.map((thumbnail, index) => (
          <motion.div
            // eslint-disable-next-line react/no-array-index-key
            key={`thumb-${index}`}
            className="h-fit"
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.25 + 0.15 * index,
            }}
          >
            <ProjectShowcaseThumbnail thumbnail={thumbnail} />
          </motion.div>
        ))}
    </div>
  );
};

export default ProjectShowcaseThumbnails;
