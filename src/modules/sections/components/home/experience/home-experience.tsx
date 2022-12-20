import React from 'react';

import Section from '../../section/section';

const HomeExperience: React.FC = () => {
  return (
    <Section className="bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-blue-500 dark:text-blue-300">Experience</h2>
      </div>
    </Section>
  );
};

export default HomeExperience;
