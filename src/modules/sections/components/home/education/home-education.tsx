'use client';

import Timeline from '@modules/timeline/components/timeline';
import type TimelineEntry from '@modules/timeline/components/timeline-entry';
import { motion } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

const EDUCATION_ENTRIES: React.ComponentPropsWithoutRef<typeof TimelineEntry>[] = [
  {
    title: 'Bachelors Degree in Computer Science',
    description:
      'I am currently pursuing a bachelors degree in Computer Science, driven by my unwavering passion for exploring the boundless possibilities of technology. With a strong focus on programming languages, algorithms, and data structures, I am dedicated to honing my software development skills.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-neutral-100 dark:stroke-neutral-100 md:h-6 md:w-6"
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
      'Programming has been one of my favorite hobbies since I was young. As time went by, I realized that increasing my knowledge in this area was the right decision. Therefore, I continued to read and learn new things to enhance my skills.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-neutral-100 dark:stroke-neutral-100 md:h-6 md:w-6"
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
  {
    title: 'English - B2 Cambridge',
    description:
      'I began learning English when I was young, during my primary school years. Later on, I enrolled in a private institution to further improve my language skills. In 2019, I took the Cambridge FCE Test and achieved a score of 177, which corresponds to a B2 level of proficiency.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-neutral-100 dark:stroke-neutral-100 md:h-6 md:w-6"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 5h7" />
        <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
        <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
        <path d="M12 20l4 -9l4 9" />
        <path d="M19.1 18h-6.2" />
      </svg>
    ),
    from: new Date(2012, 3, 15),
    to: 'Today',
  },
];

const HomeEducation: React.FC = () => {
  return (
    <Section id="education" alternateColors>
      <motion.h2
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
      </motion.h2>
      {/* Text */}
      <motion.p
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
        As a software developer, my education has been a crucial component of my journey towards building innovative and
        impactful digital solutions. I am currently undergoing a degree in Computer Science, which provided me with a
        solid foundation in programming fundamentals and web development concepts.
      </motion.p>

      <div className="mx-4 mt-6 md:mx-8 lg:mx-14">
        <Timeline entries={EDUCATION_ENTRIES} />
      </div>
    </Section>
  );
};

export default HomeEducation;
