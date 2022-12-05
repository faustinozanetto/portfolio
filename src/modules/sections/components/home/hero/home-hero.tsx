import React from 'react';
import Button from '@modules/ui/components/buttons/button';
import Section from '@modules/sections/components/section/section';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Section className="bg-gray-100 my-4 sm:my-10 md:my-14">
      <div className="flex flex-col">
        {/* Titles */}
        <div className="w-fit leading-10 mb-4">
          <h1 className="text-4xl font-bold">Hi, I'm Faustino a</h1>
          <h2 className="text-5xl font-extrabold text-blue-600">Software Developer</h2>
        </div>
        {/* Paragraph */}
        <p className="text-gray-900 text-lg font-medium">
          I am a young software developer from Argentina that fell in love with programming years ago. My primary focus
          is on web development, but I am also interested in computer graphics and game development.
        </p>
        {/* Buttons */}
        <div className="flex flex-col items-center  space-y-2 mt-2 sm:flex-row sm:space-y-0 sm:mt-4 sm:space-x-4">
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
