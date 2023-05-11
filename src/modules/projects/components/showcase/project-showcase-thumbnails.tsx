import type { ProjectData } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type ProjectShowcaseThumbnailsProps = {
  thumbnails: ProjectData['thumbnails'];
};

const ProjectShowcaseThumbnails: React.FC<ProjectShowcaseThumbnailsProps> = (props) => {
  const { thumbnails } = props;

  return (
    <div className="mt-4 grid gap-4 md:mt-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
      {thumbnails.length > 0 &&
        thumbnails.map((thumbnail, index) => {
          return (
            <m.div
              key={`thumb-${index}`}
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.25 + 0.15 * index,
              }}
              className="mb-4 w-full cursor-pointer rounded-xl"
            >
              <Image
                src={thumbnail}
                alt="Project thumbnail"
                className="h-full rounded-xl shadow-lg"
                width={500}
                height={500}
                priority={index < 3}
              />
            </m.div>
          );
        })}
    </div>
  );
};

export default ProjectShowcaseThumbnails;
