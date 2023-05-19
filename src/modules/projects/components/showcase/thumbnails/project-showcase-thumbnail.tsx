'use client';

import { Dialog, DialogContent, DialogTrigger } from '@modules/ui/components/dialog/dialog';
import Image from '@modules/ui/components/images/image';

import React from 'react';

type ProjectShowcaseThumbnailProps = {
  thumbnail: string;
};

const ProjectShowcaseThumbnail: React.FC<ProjectShowcaseThumbnailProps> = (props) => {
  const { thumbnail } = props;

  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={thumbnail}
          alt="Project thumbnail"
          className="w-full rounded-lg shadow-lg"
          width={300}
          height={300}
        />
      </DialogTrigger>
      <DialogContent className="max-w-[350px] sm:max-w-[425px] md:max-w-5xl">
        <Image
          src={thumbnail}
          alt="Project thumbnail"
          className="w-full rounded-lg shadow-lg"
          width={800}
          height={800}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectShowcaseThumbnail;
