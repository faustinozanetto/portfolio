import React from 'react';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import Button from '@modules/ui/components/buttons/button';
import Container from '@modules/ui/components/container/container';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';

const HomePage: React.FC = (props) => {
  const {} = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Home',
        description: 'Home page of my personal porftolio.',
      }}
    >
      <Container>
        <Heading as="h1" fontSize="sm" fontWeight="normal">
          Home Page
        </Heading>
        <Heading as="h2" fontSize="md" fontWeight="semibold">
          Home Page
        </Heading>
        <Heading as="h3" fontSize="lg" fontWeight="bold">
          Home Page
        </Heading>
        <Heading as="h4" fontSize="xl">
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
        <Text fontSize="md" fontWeight="normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis nihil, pariatur illo ipsum ipsa
          cumque deleniti in eaque id unde a eveniet asperiores porro dolore? Expedita fugit eum qui.
        </Text>
      </Container>
    </BaseLayout>
  );
};

export default HomePage;
