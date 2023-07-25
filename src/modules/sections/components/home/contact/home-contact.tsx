'use client';

import { motion } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';
import HomeContactOption, { HomeContactOptionProps } from './home-contact-option';

const CONTACT_OPTIONS: HomeContactOptionProps[] = [
  {
    href: 'https://github.com/faustinozanetto',
    type: 'Github',
    label: '@faustinozanetto',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-neutral-100 "
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/faustino-zanetto-4294a3213/',
    type: 'LinkedIn',
    label: '@faustino-zanetto',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-neutral-100 "
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    ),
  },
  {
    href: 'mailto:zanettofaustino@gmail.com',
    type: 'Mail',
    label: 'zanettofaustino@gmail.com',
    isExternalPage: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-neutral-100 "
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
];

const HomeContact: React.FC = () => (
  <Section className="text-center" id="contact">
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
      👋 Get in Touch
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
      className="mb-2 mx-auto max-w-3xl text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
    >
      Feel free to get in touch with me if you have any questions, project inquiries, or if you would like to discuss a
      collaboration. You can reach me through the contact form on my portfolio website.
    </motion.p>

    <div className="flex gap-4 mx-auto max-w-3xl mt-4 md:mt-8 justify-center flex-wrap">
      {CONTACT_OPTIONS.map((option) => (
        <HomeContactOption key={option.type} {...option} />
      ))}
    </div>
  </Section>
);

export default HomeContact;
