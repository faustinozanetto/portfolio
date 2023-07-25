'use client';

import Image from '@modules/ui/components/images/image';

import React from 'react';

type ProjectShowcaseThumbnailProps = {
  thumbnail: string;
};

const ProjectShowcaseThumbnail: React.FC<ProjectShowcaseThumbnailProps> = (props) => {
  const { thumbnail } = props;

  return (
    <Image
      src={thumbnail}
      alt="Project thumbnail"
      className="w-full rounded-lg shadow-lg"
      quality={80}
      width={850}
      height={600}
    />
  );
};

export default ProjectShowcaseThumbnail;
