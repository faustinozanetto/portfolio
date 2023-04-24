import BaseLayout from '@modules/layouts/components/base/base-layout';
import Section from '@modules/sections/components/section/section';
import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'Page not found | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 md:my-10 lg:my-14">
        <div className="flex flex-col items-center space-y-4  text-center text-neutral-900 dark:text-neutral-100">
          {/* Titles */}
          <div className="leading-tight">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              It looks like the page you requested
              <br />
              <span className="font-bold text-primary-500 dark:text-primary-300">does not exist!</span>
            </h1>
          </div>

          {/* Paragraph */}
          <p className="text-base md:max-w-4xl md:text-lg">
            Oops! The page you were looking for doesn&apos;t seem to exist. It may have been moved, deleted or the link
            you followed might be incorrect. Don&apos;t worry though, you can try using the navigation menu to find what
            you&apos;re looking for. If you continue to have trouble, feel free to contact us for assistance.
          </p>
          {/* Buttons */}
          <LinkButton className="w-full md:w-40" href="/">
            Go Home
          </LinkButton>
        </div>
      </Section>
    </BaseLayout>
  );
};

export default NotFoundPage;
