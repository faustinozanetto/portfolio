import React from 'react';
import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { lightTheme } from '@styles/global-styles';
import Box from '@modules/ui/components/box/box';
import Section from '@modules/sections/components/section/section';

const NotFoundView: React.FC = () => {
  return (
    <Section>
      {/* Titles */}
      <Box marginBottom="1rem">
        <Heading as="h1" fontSize="5xl" textAlign="center">
          It looks like the page you requested
          <Heading as="h2" fontSize="5xl" textAlign="center" fontWeight="black" color={lightTheme.colors.primary[300]}>
            does not exist!
          </Heading>
        </Heading>
      </Box>

      {/* Paragraph */}
      <Text fontSize="xl" maxWidth="650px" marginBottom="1rem">
        If you think that this is a mistakan error, please contact me to report the issue and help me make the site
        better, thanks :).
      </Text>
      {/* Buttons */}
      <LinkButton size="lg" href="/">
        Go Home
      </LinkButton>
    </Section>
  );
};

export default NotFoundView;
