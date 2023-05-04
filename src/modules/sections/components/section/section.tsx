import clsx from 'clsx';
import React from 'react';

type ISectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  /** Optional: Wether to alternate color scheme or not. */
  alternateColors?: boolean;
};

const Section: React.FC<ISectionProps> = (props) => {
  const { children, alternateColors = false, ...rest } = props;

  return (
    <div
      className={clsx(
        alternateColors ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-neutral-100 dark:bg-neutral-900',
        rest.className
      )}
      {...rest}
    >
      <section className="container mx-auto my-6 w-full max-w-5xl items-start justify-center p-4 md:my-8 md:p-8">
        {children}
      </section>
    </div>
  );
};

export default Section;
