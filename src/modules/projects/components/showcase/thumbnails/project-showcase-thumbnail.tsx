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
          className="rounded-lg shadow-lg"
          quality={50}
          width={350}
          height={350}
        />
      </DialogTrigger>
      <DialogContent className="max-w-[350px] sm:max-w-[425px] md:max-w-6xl">
        <Image
          src={thumbnail}
          alt="Project thumbnail"
          className="w-full rounded-lg shadow-lg"
          loading="lazy"
          quality={90}
          width={1250}
          height={1000}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectShowcaseThumbnail;
