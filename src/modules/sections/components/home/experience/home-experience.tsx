import React from 'react';

import Section from '../../section/section';

const HomeExperience: React.FC = () => {
  return (
    // bg-neutral-100 dark:bg-neutral-900
    <Section className="">
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-500 dark:text-blue-300 sm:text-5xl">Experience</h2>
      </div>
    </Section>
  );
};

export default HomeExperience;
