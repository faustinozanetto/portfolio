import Section from '@modules/sections/components/section/section';
import Button from '@modules/ui/components/buttons/button';
import React from 'react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    // bg-neutral-100 dark:bg-neutral-900
    <Section className="my-4  sm:my-10 md:my-14">
      <div className="flex flex-col text-neutral-900 dark:text-neutral-100">
        {/* Titles */}
        <div className="mb-4 w-fit leading-10">
          <h1 className="text-3xl font-bold sm:text-4xl">Hi, I&apos;m Faustino a</h1>
          <h2 className="text-4xl font-extrabold text-primary-600 dark:text-primary-300 sm:text-5xl">
            Software Developer
          </h2>
        </div>
        {/* Paragraph */}
        <p className="text-base font-medium sm:text-lg">
          I am a young software developer from Argentina that fell in love with programming years ago. My primary focus
          is on web development, but I am also interested in computer graphics and game development.
        </p>
        {/* Buttons */}
        <div className="mt-2 flex flex-col  items-center space-y-2 sm:mt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button className="w-full sm:w-auto">Contact Me</Button>
          <Button className="w-full sm:w-auto" variant="outline">
            Check my Work
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
