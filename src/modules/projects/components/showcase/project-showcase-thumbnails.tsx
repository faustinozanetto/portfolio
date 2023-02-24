import { useProjectThumnbail } from '@modules/projects/context/project-thumbnails-context';
import type { ProjectData } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import ProjectThumbnailModal from './project-thumbnail-modal';

type ProjectShowcaseThumbnailsProps = {
  thumbnails: ProjectData['thumbnails'];
};

const ProjectShowcaseThumbnails: React.FC<ProjectShowcaseThumbnailsProps> = (props) => {
  const { thumbnails } = props;
  const { selectedThumbnail, setSelectedThumbnail } = useProjectThumnbail();

  return (
    <>
      <div className="container columns-1 gap-4 md:columns-2">
        {thumbnails.length > 0 &&
          thumbnails.map((thumbnail, index) => {
            return (
              <m.div
                key={`thumb-${index}`}
                initial={{ opacity: 0, translateY: -30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 * index,
                }}
                className="mb-4 w-full cursor-pointer"
              >
                <Image
                  src={thumbnail}
                  alt="Project thumbnail"
                  className="rounded-xl"
                  onClick={() => {
                    setSelectedThumbnail(thumbnail);
                  }}
                  width={800}
                  height={800}
                  priority
                />
              </m.div>
            );
          })}
      </div>

      <ProjectThumbnailModal thumbnail={selectedThumbnail} onClose={() => setSelectedThumbnail('')} />
    </>
  );
};

export default ProjectShowcaseThumbnails;
