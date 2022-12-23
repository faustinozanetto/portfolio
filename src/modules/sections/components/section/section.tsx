import React from 'react';

type ISectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Section: React.FC<ISectionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div {...rest}>
      <section className="container mx-auto max-w-screen-lg p-4 sm:p-6 lg:p-8">{children}</section>
    </div>
  );
};

export default Section;
