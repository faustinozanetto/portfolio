'use client';

import Timeline from '@modules/timeline/components/timeline';
import type TimelineEntry from '@modules/timeline/components/timeline-entry';
import { motion } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

const EXPERIENCE_ENTRIES: React.ComponentPropsWithoutRef<typeof TimelineEntry>[] = [
  {
    title: 'Frontend Developer at Anywhere.com',
    description:
      'I am currently working at Anywhere.com helping to build the main project website using technologies like NextJS, TailwindCSS and more. I have also helped construct the email templates used for marketing and other side project using tools like Eleventy for static site generation.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 fill-background md:h-6 md:w-6"
        viewBox="0 0 45 50"
        stroke="none"
      >
        <path d="M45 21.9128C45 9.80945 34.9273 0 22.5009 0C10.0746 0 0 9.80945 0 21.9128C0 30.0403 4.54346 37.1345 11.2937 40.9179L8.80472 49.4045C8.71629 49.7032 8.9477 50.0018 9.26753 50.0018H15.8334C16.0517 50.0018 16.2436 49.8589 16.2981 49.6537L18.0816 43.4023C19.3309 43.6442 20.6177 43.7871 21.9328 43.8182C22.1209 43.8237 22.3109 43.8256 22.5009 43.8256C24.0342 43.8256 25.5318 43.6753 26.9804 43.3914L28.7828 49.6574C28.8392 49.8608 29.0292 50.0018 29.2475 50.0018H35.7645C36.0843 50.0018 36.3157 49.705 36.2273 49.4045L33.7458 40.9033V40.8978C40.4735 37.1107 45.0019 30.0275 45.0019 21.9128H45ZM22.2225 38.7926L18.7006 41.2239L22.5122 27.871L26.3558 41.2312L22.7756 38.7926C22.6082 38.679 22.3862 38.679 22.2206 38.7926H22.2225ZM31.6725 33.8073L26.0322 14.4833C25.9739 14.2818 25.7839 14.1425 25.5694 14.1425H19.5115C19.297 14.1425 19.107 14.2818 19.0487 14.4833L13.3726 33.8311V33.8402C9.64004 31.1268 7.2225 26.7955 7.2225 21.9128C7.2225 13.6955 14.0631 7.03371 22.5009 7.03371C30.9388 7.03371 37.7794 13.6955 37.7794 21.9128C37.7794 26.7772 35.3807 31.0938 31.6744 33.8091L31.6725 33.8073Z"></path>
      </svg>
    ),
    from: new Date(2024, 5, 13),
    to: 'Present',
  },
];

const HomeExperience: React.FC = () => (
  <Section id="experience" className="z-50">
    <motion.h2
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'tween',
        duration: 0.25,
      }}
      className="mb-2 text-4xl font-extrabold text-primary md:mb-4 md:text-5xl"
    >
      Experience
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
      className="mb-2 md:mb-4 md:text-lg"
    >
      My experience as a software developer has played a key role in helping me build practical skills and deliver
      real-world solutions. Working on various projects has taught me how to develop, test, and improve software. Each
      opportunity has helped me grow and adapt to new challenges.
    </motion.p>

    <div className="mx-4 mt-6 md:mx-8 lg:mx-14">
      <Timeline entries={EXPERIENCE_ENTRIES} />
    </div>
  </Section>
);

export default HomeExperience;
