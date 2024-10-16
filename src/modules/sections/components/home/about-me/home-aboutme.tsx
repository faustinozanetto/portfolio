'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import HighlightedWord from '@modules/common/components/highlighted-word';
import Section from '../../section/section';

const HomeAboutMe: React.FC = () => (
  <Section className="z-20" id="about">
    <div className="grid items-center gap-4 md:grid-cols-aboutMe md:gap-6">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
      >
        <Image
          src="/assets/images/faustino.webp"
          alt="About me Image"
          title="Faustino Zanetto"
          className="bg-cover object-cover h-64 w-full rounded-3xl md:h-72 md:w-72 border border-border"
          width={550}
          height={550}
          loading="lazy"
        />
      </motion.div>

      {/* Right */}
      <div>
        <motion.h2
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.15,
          }}
          className="mb-2 text-4xl font-extrabold text-primary md:mb-4 md:text-5xl"
        >
          About me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.25,
          }}
          className="mb-2 md:mb-4 md:text-lg"
        >
          From a tender age, I found myself captivated by the realms of programming and technology. It was during those
          formative years that I embarked on my coding journey, delving into the world of{' '}
          <HighlightedWord>Java</HighlightedWord> and <HighlightedWord>Minecraft</HighlightedWord>, as I undertook my
          very first projects.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.35,
          }}
          className="mb-2 md:mb-4 md:text-lg"
        >
          Presently, my focus has shifted towards the captivating realm of web development. Employing an array of
          powerful tools such as <HighlightedWord>React</HighlightedWord> and{' '}
          <HighlightedWord>Typescript</HighlightedWord>, complemented by frameworks like{' '}
          <HighlightedWord>Next JS</HighlightedWord> and styling libraries like{' '}
          <HighlightedWord>TailwindCSS</HighlightedWord>.
        </motion.p>
      </div>
    </div>
  </Section>
);

export default HomeAboutMe;
