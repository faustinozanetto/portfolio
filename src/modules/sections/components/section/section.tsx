import { cn } from '@modules/ui/lib/ui.lib';
import React from 'react';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn('w-full odd:bg-background even:bg-background-alternate', className)} {...rest}>
      <section className="container mx-auto my-8 w-full max-w-5xl items-start justify-center p-4 md:my-12 md:max-w-6xl md:p-8 lg:my-16 lg:max-w-7xl">
        {children}
      </section>
    </div>
  );
};

export default Section;
