'use client';

import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { useState } from 'react';

import Skeleton from '../skeleton/skeleton';

type ImageProps = NextImageProps & {};

const Image: React.FC<ImageProps> = ({ ...props }: { css?: any } & Omit<ImageProps, 'onLoadingComplete'>) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Skeleton className="rounded-lg" isLoaded={imageLoaded}>
      <NextImage
        onLoadingComplete={() => {
          setImageLoaded(true);
        }}
        {...props}
      />
    </Skeleton>
  );
};

export default Image;
