import clsx from 'clsx';
import React from 'react';

interface ISkeletonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isLoaded: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, ISkeletonProps>((props, ref) => {
  const { isLoaded, children, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(!isLoaded && 'skeleton animate-blink cursor-default bg-gray-300 bg-clip-padding')}
      {...rest}
    >
      {children}
    </div>
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
