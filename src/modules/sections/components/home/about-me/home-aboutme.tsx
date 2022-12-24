import NextImage from 'next/image';
import React from 'react';

import Section from '../../section/section';

interface IHomeAboutMeProps {}

const HighlightedWord: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-xl font-bold italic text-blue-600 dark:text-blue-300">{children}</span>;
};

const HomeAbutMe: React.FC<IHomeAboutMeProps> = (props) => {
  const {} = props;

  return (
    <Section className=" bg-neutral-200 dark:bg-neutral-800">
      <div className="grid grid-cols-1 grid-rows-1 items-center gap-4 md:grid-cols-aboutMe md:grid-rows-1 md:gap-6">
        {/* Left */}
        <NextImage
          src="/assets/images/faustino.png"
          alt="About me Image"
          className="mx-auto h-60 w-60 rounded-3xl sm:h-64 sm:w-64 md:h-72 md:w-72"
          priority
          width={800}
          height={800}
        />

        {/* Right */}
        <div className="flex flex-col space-y-2 text-neutral-900 dark:text-neutral-100 sm:space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-500 dark:text-blue-300 sm:text-5xl">About me</h2>
          <p className="text-base font-medium sm:text-lg">
            I&apos;m a simple young guy from Argentina that fell in love with computers a while ago. Since little I have
            always been interested in computers and programming. Back in the day, I started coding my very first
            projects using <HighlightedWord>Java</HighlightedWord> and Minecraft.
          </p>
          <p className="text-base font-medium sm:text-lg">
            Nowadays I&apos;m more into programming in the web industry using tools such as{' '}
            <HighlightedWord>React</HighlightedWord> and Typescript combined with
            <HighlightedWord>NextJs</HighlightedWord> and TailwindCSS. Although web development is my primary focus at
            the moment, I&apos;m also interested in computer graphics and rendering in general using
            <HighlightedWord>C++</HighlightedWord> and OpenGL.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbutMe;
