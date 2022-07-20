import React from 'react';
import StyledContainer from './container.styles';

type IContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container: React.FC<IContainerProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
export default Container;
