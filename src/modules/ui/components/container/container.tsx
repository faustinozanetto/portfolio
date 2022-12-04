import React from 'react';
import type { IBoxProps } from '../box/box';
import StyledContainer from './container.styles';

export type IContainerProps = IBoxProps & {
  children?: React.ReactNode;
};

const Container: React.FC<IContainerProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledContainer as="div" {...rest}>
      {children}
    </StyledContainer>
  );
};
export default Container;
