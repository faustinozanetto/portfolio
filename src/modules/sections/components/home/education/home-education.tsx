import Timeline from '@modules/timeline/components/timeline';
import { m } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

const HomeExperience: React.FC = () => {
  return (
    <Section id="education" alternateColors>
      <m.h2
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
        className="mb-2 text-4xl font-extrabold text-primary-500 dark:text-primary-300 md:mb-4 md:text-5xl"
      >
        Education
      </m.h2>
      {/* Text */}
      <m.p
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
        className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
      >
        As a web developer, my education has been a crucial component of my journey towards building innovative and
        impactful digital solutions. I am currently undergoing a degree in Computer Science, which provided me with a
        solid foundation in programming fundamentals and web development concepts. Additionally, I am constantly staying
        up-to-date with the latest technologies and trends in the industry.
      </m.p>

      <div className="mx-4 mt-6 md:mx-8 lg:mx-14">
        <Timeline
          entries={[
            {
              title: 'Bachelors Degree in Computer Science',
              description:
                'dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-neutral-100 dark:stroke-neutral-100"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              ),
              from: new Date(2021, 2, 15),
              to: 'Attending',
            },
            {
              title: 'Selft Taught Programming',
              description:
                'dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-neutral-100 dark:stroke-neutral-100"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <line x1="6" y1="10" x2="6" y2="10" />
                  <line x1="10" y1="10" x2="10" y2="10" />
                  <line x1="14" y1="10" x2="14" y2="10" />
                  <line x1="18" y1="10" x2="18" y2="10" />
                  <line x1="6" y1="14" x2="6" y2="14.01" />
                  <line x1="18" y1="14" x2="18" y2="14.01" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              ),
              from: new Date(2014, 3, 15),
              to: 'Today',
            },
          ]}
        />
      </div>
    </Section>
  );
};

export default HomeExperience;
