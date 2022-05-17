import React from 'react';
import BaseLayout from '@components/layouts/base/base-layout';
import styled from 'styled-components';
import useTheme from '@hooks/use-theme';
import Button from '@components/ui/buttons/button';

type HomePageProps = {};

const Text = styled.h1`
  color: #000;
`;

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;
  const [theme, themeToggler] = useTheme();

  return (
    <BaseLayout>
      <Text>hi</Text>
      <button type="button" aria-label="Toggle Theme" onClick={() => themeToggler()}>
        Toggle Theme
      </button>
      <Button>Welcome</Button>
    </BaseLayout>
  );
};

export default HomePage;
