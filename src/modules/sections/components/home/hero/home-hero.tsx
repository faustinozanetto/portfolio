import Section from '@modules/sections/components/section/section';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { m } from 'framer-motion';
import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <Section id="hero" className="my-4 md:my-8 lg:my-14">
      {/* Titles */}
      <div className="mb-2 leading-10 md:mb-4">
        <m.h1
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
          }}
          className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl lg:text-5xl"
        >
          Hi, I&apos;m Faustino a
        </m.h1>
        <m.h2
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.15,
          }}
          className="text-4xl font-extrabold text-primary-600 dark:text-primary-300 md:text-5xl lg:text-6xl"
        >
          Software Developer
        </m.h2>
      </div>
      {/* Paragraph */}
      <m.p
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
        I&apos;m a passionate young software developer from Argentina who discovered my love for programming years ago.
        While my primary focus lies in web development, I have a keen interest in exploring the realms of computer
        graphics and game development as well.
      </m.p>
      {/* Buttons */}
      <m.div
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
          colorScheme="secondary"
          href="/assets/Resumee.pdf"
          target="_blank"
          aria-label="Check my Work Button"
          size="lg"
        >
          Open Resumee
        </LinkButton>
      </m.div>
    </Section>
  );
};

export default HomeHero;
