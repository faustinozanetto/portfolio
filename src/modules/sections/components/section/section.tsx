import { cn } from '@modules/ui/lib/ui.lib';
import React from 'react';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  /** Optional: Wether to alternate color scheme or not. */
  alternateColors?: boolean;
};

const Section: React.FC<SectionProps> = (props) => {
  const { children, className, alternateColors = false, ...rest } = props;

  return (
    <div
      className={cn(
        alternateColors ? 'bg-background-200 dark:bg-background-800' : 'bg-background-100 dark:bg-background-900',
        'w-full',
        className
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
