import { m } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Section from '../../section/section';

const HighlightedWord: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="font-bold italic text-primary-600 dark:text-primary-300">{children}</span>;
};

const HomeAbutMe: React.FC = () => {
  return (
    <Section alternateColors>
      <div className="grid items-center gap-4 md:grid-cols-aboutMe md:gap-6">
        {/* Left */}
        <m.div
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
          }}
        >
          <Image
            src="/assets/images/faustino.png"
            alt="About me Image"
            className="mx-auto h-64 w-64 rounded-3xl md:h-72 md:w-72"
            width={350}
            height={350}
            priority
          />
        </m.div>

        {/* Right */}
        <div className="text-neutral-900 dark:text-neutral-100">
          <m.h2
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.15,
            }}
            className="mb-2 text-3xl font-extrabold text-primary-500 dark:text-primary-300 md:mb-4 md:text-4xl lg:text-5xl"
          >
            About me
          </m.h2>
          <m.p
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
            I&apos;m a simple young guy from Argentina that fell in love with computers a while ago. Since little I have
            always been interested in computers and programming. Back in the day, I started coding my very first
            projects using <HighlightedWord>Java</HighlightedWord> and Minecraft.
          </m.p>
          <m.p
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.35,
            }}
            className="md:text-lg"
          >
            Nowadays I&apos;m more into programming in the web industry using tools such as{' '}
            <HighlightedWord>React</HighlightedWord> and Typescript combined with{' '}
            <HighlightedWord>NextJs</HighlightedWord> and TailwindCSS. Although web development is my primary focus at
            the moment, I&apos;m also interested in computer graphics and rendering in general using{' '}
            <HighlightedWord>C++</HighlightedWord> and OpenGL.
          </m.p>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbutMe;
