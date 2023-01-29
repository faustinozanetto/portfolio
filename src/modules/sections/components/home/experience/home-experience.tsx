import React from 'react';

import Section from '../../section/section';

const HomeExperience: React.FC = () => {
  return (
    <Section alternateColors>
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-primary-500 dark:text-primary-300 md:text-5xl">Experience</h2>
      </div>
    </Section>
  );
};

export default HomeExperience;
