import React from 'react';
import BaseLayout from '@components/layouts/base/base-layout';
import useTheme from '@hooks/use-theme';
import Button from '@modules/ui/components/buttons/button';
import Container from '@modules/ui/components/container/container';
import Text from '@modules/ui/components/text/text';
import Heading from '@modules/ui/components/heading/heading';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;
  const [theme, themeToggler] = useTheme();

  return (
    <BaseLayout
      headProps={{
        title: 'Home',
        description: 'Home page of my personal porftolio.',
      }}
    >
      <Container>
        <Heading as="h1" size="sm" weight="normal">
          Home Page
        </Heading>
        <Heading as="h2" size="md" weight="semibold">
          Home Page
        </Heading>
        <Heading as="h3" size="lg" weight="bold">
          Home Page
        </Heading>
        <Heading as="h4" size="xl">
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
        <Text size="md" weight="normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis nihil, pariatur illo ipsum ipsa
          cumque deleniti in eaque id unde a eveniet asperiores porro dolore? Expedita fugit eum qui.
        </Text>
      </Container>
    </BaseLayout>
  );
};

export default HomePage;
