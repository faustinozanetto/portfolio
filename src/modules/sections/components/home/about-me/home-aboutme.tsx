import { m } from 'framer-motion';
import NextImage from 'next/image';
import React from 'react';

import Section from '../../section/section';

interface IHomeAboutMeProps {}

const HighlightedWord: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-xl font-bold italic text-primary-600 dark:text-primary-300">{children}</span>;
};

const HomeAbutMe: React.FC<IHomeAboutMeProps> = (props) => {
  const {} = props;

  return (
    <Section alternateColors>
      <div className="grid items-center gap-4 md:grid-cols-aboutMe md:gap-6">
        {/* Left */}
        <m.div
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'tween',
            duration: 0.25,
          }}
        >
          <NextImage
            src="/assets/images/faustino.png"
            alt="About me Image"
            className="mx-auto h-64 w-64 rounded-3xl md:h-72 md:w-72"
            width={600}
            height={600}
            priority
          />
        </m.div>

        {/* Right */}
        <div className="flex flex-col items-center space-y-2 text-neutral-900 dark:text-neutral-100 md:items-start md:space-y-4">
          <m.h2
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.1,
            }}
            className="text-4xl font-extrabold text-primary-500 dark:text-primary-300 md:text-5xl"
          >
            About me
          </m.h2>
          <m.p
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.2,
            }}
            className="text-base md:text-lg"
          >
            I&apos;m a simple young guy from Argentina that fell in love with computers a while ago. Since little I have
            always been interested in computers and programming. Back in the day, I started coding my very first
            projects using <HighlightedWord>Java</HighlightedWord> and Minecraft.
          </m.p>
          <m.p
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.3,
            }}
            className="text-base md:text-lg"
          >
            Nowadays I&apos;m more into programming in the web industry using tools such as{' '}
            <HighlightedWord>React</HighlightedWord> and Typescript combined with
            <HighlightedWord>NextJs</HighlightedWord> and TailwindCSS. Although web development is my primary focus at
            the moment, I&apos;m also interested in computer graphics and rendering in general using
            <HighlightedWord>C++</HighlightedWord> and OpenGL.
          </m.p>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbutMe;
