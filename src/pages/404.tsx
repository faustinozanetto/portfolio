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
      <Section>
        <div className="flex flex-col items-center space-y-4 p-4 text-center">
          {/* Titles */}
          <div className="leading-tight">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">It looks like the page you requested </h1>
            <span className="text-4xl font-bold text-blue-500 sm:text-5xl">does not exist!</span>
          </div>

          {/* Paragraph */}
          <p className="text-lg font-normal text-gray-900 sm:mx-8 sm:text-xl md:mx-10">
            If you think that this is a mistakan error, please contact me to report the issue and help me make the site
            better, thanks :).
          </p>
          {/* Buttons */}
          <LinkButton size="lg" href="/">
            Go Home
          </LinkButton>
        </div>
      </Section>
    </BaseLayout>
  );
};

export default NotFoundPage;
