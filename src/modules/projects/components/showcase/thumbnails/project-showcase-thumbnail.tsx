import React from 'react';
import Image from 'next/image';

type ProjectShowcaseThumbnailProps = {
  thumbnail: string;
};

const ProjectShowcaseThumbnail: React.FC<ProjectShowcaseThumbnailProps> = (props) => {
  const { thumbnail } = props;

  return (
    <Image
      src={thumbnail}
      alt="Project thumbnail"
      className="w-full rounded-lg shadow border"
      width={600}
      height={600}
    />
  );
};

export default ProjectShowcaseThumbnail;
