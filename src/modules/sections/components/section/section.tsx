import clsx from 'clsx';
import React from 'react';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  /** Optional: Wether to alternate color scheme or not. */
  alternateColors?: boolean;
};

const Section: React.FC<SectionProps> = (props) => {
  const { children, alternateColors = false, ...rest } = props;

  return (
    <div
      className={clsx(
        alternateColors ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-neutral-100 dark:bg-neutral-900',
        rest.className
      )}
      {...rest}
    >
      <section className="container mx-auto my-8 w-full max-w-5xl items-start justify-center p-4 md:my-12 md:max-w-6xl md:p-8 lg:my-16 lg:max-w-7xl">
        {children}
      </section>
    </div>
  );
};

export default Section;
