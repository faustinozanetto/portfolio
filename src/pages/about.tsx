import BaseLayout from '@modules/layouts/components/base/base-layout';
import Section from '@modules/sections/components/section/section';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'About | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 md:my-10 lg:my-14">
        <div className="flex flex-col space-y-4 text-neutral-900 dark:text-neutral-100 md:space-y-8">
          {/* Titles */}
          <h2 className="text-center text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300 md:text-4xl lg:text-5xl">
            A little more about me
          </h2>

          {/* Paragraph */}
          <p className="text-base md:text-lg">
            I&apos;ve born in 2003 at a rather large city in the middle section of Argentina called Bahia Blanca.
          </p>
        </div>
      </Section>
    </BaseLayout>
  );
};

export default AboutPage;
