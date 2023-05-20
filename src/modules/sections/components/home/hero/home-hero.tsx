'use client';

import Section from '@modules/sections/components/section/section';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { motion } from 'framer-motion';
import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <Section className="relative" id="hero">
      {/* Gradients */}
      <div aria-hidden="true" className="absolute inset-0 left-1/3 -translate-x-1/3 transform animate-hero-background">
        <div className="rounded-fulls dark:from-primary-800/50 dark:via-secondary-900/50 dark:to-primary-800/40 from-primary-300 via-primary-100 to-secondary-200 h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl blur-3xl "></div>
      </div>
      <div className="relative z-10">
        {/* Titles */}
        <div className="mb-2 leading-10 md:mb-4">
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
            className="text-4xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m Faustino a
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.15,
            }}
            className="text-5xl font-extrabold text-primary-600 dark:text-primary-300 md:text-6xl lg:text-7xl"
          >
            Software Developer
          </motion.h2>
        </div>
        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.25,
          }}
          className="mb-2 max-w-5xl text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
        >
          I&apos;m a passionate young software developer from Argentina who discovered my love for programming years
          ago. While my primary focus lies in web development, I have a keen interest in exploring the realms of
          computer graphics and game development as well.
        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.35,
          }}
          className="mt-4 flex flex-col items-center space-y-2 md:mt-6 md:flex-row md:space-x-4 md:space-y-0"
        >
          <LinkButton
            href="mailto:zanettofaustino@gmail.com"
            aria-label="Contact Me"
            className="w-full md:w-auto"
            size="lg"
          >
            Contact Me
          </LinkButton>
          <LinkButton
            className="w-full md:w-auto"
            href="/assets/Resumee.pdf"
            target="_blank"
            variant="ghost"
            aria-label="Check my Work Button"
            size="lg"
          >
            Open Resumee
          </LinkButton>
        </motion.div>
      </div>
    </Section>
  );
};

export default HomeHero;
