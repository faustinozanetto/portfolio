import React from 'react';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import Button from '@modules/ui/components/buttons/button';
import Container from '@modules/ui/components/container/container';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';
import Box from '@modules/ui/components/box/box';
import { useTheme } from 'styled-components';

const HomePage: React.FC = (props) => {
  const {} = props;
  const theme = useTheme();

  return (
    <BaseLayout
      headProps={{
        title: 'Home',
        description: 'Home page of my personal porftolio.',
      }}
    >
      <Container>
        <Heading as="h1" customization={{ color: 'white', fontSize: theme.fontSize.sm, fontWeight: 'bold' }}>
          Home Page
        </Heading>
        <Heading as="h2" customization={{ color: 'white', fontSize: theme.fontSize.md, fontWeight: 'bold' }}>
          Home Page
        </Heading>
        <Heading as="h3" customization={{ color: 'white', fontSize: theme.fontSize.lg, fontWeight: 'bold' }}>
          Home Page
        </Heading>
        <Heading as="h4" customization={{ color: 'white', fontSize: theme.fontSize.xl, fontWeight: 'bold' }}>
          Home Page
        </Heading>
        <Button size="sm" aria-label="Hello">
          Welcome
        </Button>
        <Button size="md" aria-label="Hello">
          Welcome
        </Button>
        <Button size="lg" aria-label="Hello">
          Welcome
        </Button>
        <Button size="xl" aria-label="Hello">
          Welcome
        </Button>
        <Text customization={{ fontSize: 'md', fontWeight: 'normal' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis nihil, pariatur illo ipsum ipsa
          cumque deleniti in eaque id unde a eveniet asperiores porro dolore? Expedita fugit eum qui.
        </Text>
      </Container>
      <Box
        responsiveStyles={[
          {
            media: theme.breakPoints.sm,
            styles: {
              backgroundColor: 'green',
            },
          },
          {
            media: theme.breakPoints.md,
            styles: {
              backgroundColor: 'red',
            },
          },
        ]}
      >
        <Heading as="h1" customization={{ fontSize: 'sm', fontWeight: 'bold' }}>
          Testing Box Responssive
        </Heading>
      </Box>
    </BaseLayout>
  );
};

export default HomePage;
