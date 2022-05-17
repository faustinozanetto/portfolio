import React from 'react';
import StyledContainer from './container.styles';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
export default Container;
