import Container from '@modules/ui/components/container/container';
import React from 'react';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <Container>
      <h1>home</h1>
    </Container>
  );
};

export default HomeView;
