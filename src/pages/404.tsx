import BaseLayout from '@modules/layouts/components/base/base-layout';
import Section from '@modules/sections/components/section/section';
import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';

interface INotFoundPageProps {}

const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
  const {} = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Page not found | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 sm:my-10 md:my-14">
        <div className="flex flex-col space-y-4 text-center text-neutral-900 dark:text-neutral-100">
          {/* Titles */}
          <div className="leading-tight">
            <h1 className="text-4xl font-bold sm:text-5xl">It looks like the page you requested </h1>
            <span className="text-4xl font-bold text-blue-500 dark:text-blue-300 sm:text-5xl">does not exist!</span>
          </div>

          {/* Paragraph */}
          <p className="text-lg font-medium">
            If you think that this is a mistakan error, please contact me to report the issue and help me make the site
            better, thanks :).
          </p>
          {/* Buttons */}
          <LinkButton className="w-full sm:w-auto" href="/">
            Go Home
          </LinkButton>
        </div>
      </Section>
    </BaseLayout>
  );
};

export default NotFoundPage;
