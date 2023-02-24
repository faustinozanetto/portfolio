import Section from '@modules/sections/components/section/section';
import Button from '@modules/ui/components/buttons/button';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { m } from 'framer-motion';
import React from 'react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Section className="my-4 md:my-8 lg:my-14">
      <div className="flex flex-col text-neutral-900 dark:text-neutral-100">
        {/* Titles */}
        <div className="mb-4 w-fit leading-10">
          <m.h1
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
            className="text-3xl font-bold md:text-4xl"
          >
            Hi, I&apos;m Faustino a
          </m.h1>
          <m.h2
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.1,
            }}
            className="text-4xl font-extrabold text-primary-600 dark:text-primary-300 md:text-5xl"
          >
            Software Developer
          </m.h2>
        </div>
        {/* Paragraph */}
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
          I am a young software developer from Argentina that fell in love with programming years ago. My primary focus
          is on web development, but I am also interested in computer graphics and game development.
        </m.p>
        {/* Buttons */}
        <m.div
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.3,
          }}
          className="mt-4 flex flex-col items-center space-y-2 md:mt-6 md:flex-row md:space-y-0 md:space-x-4"
        >
          <Button className="w-full md:w-auto">Contact Me</Button>
          <LinkButton
            className="w-full md:w-auto"
            variant="outline"
            href="/assets/Resumee.pdf"
            target="_blank"
            aria-label="Check my Work Button"
          >
            Open Resumee
          </LinkButton>
        </m.div>
      </div>
    </Section>
  );
};

export default HomeHero;
