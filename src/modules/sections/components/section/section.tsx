import clsx from 'clsx';
import React from 'react';

type ISectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Section: React.FC<ISectionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div {...rest}>
      <section className={clsx('mx-auto w-full max-w-6xl p-6 md:p-10 lg:p-12')}>{children}</section>
    </div>
  );
};

export default Section;
