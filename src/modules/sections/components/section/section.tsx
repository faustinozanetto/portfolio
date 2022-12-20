import React from 'react';

type ISectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Section: React.FC<ISectionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div {...rest}>
      <section className="container mx-auto max-w-screen-lg px-8 py-5 lg:py-8 xl:px-5">{children}</section>
    </div>
  );
};

export default Section;
