import clsx from 'clsx';
import React from 'react';

type SkeletonProps = {
  isLoaded: boolean;
  className?: string;
  children: React.ReactNode;
};

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { isLoaded, className, children, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(!isLoaded && 'skeleton animate-blink cursor-default bg-gray-300 bg-clip-padding', className)}
      {...rest}
    >
      {children}
    </div>
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
