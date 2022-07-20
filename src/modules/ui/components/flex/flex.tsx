import React from 'react';
import type { IStyledFlexProps } from './flex.styles';
import { StyledFlex } from './flex.styles';

type IFlexProps = React.HTMLAttributes<HTMLDivElement> &
  IStyledFlexProps & {
    children?: React.ReactNode;
  };

const Flex: React.FC<IFlexProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledFlex as="div" {...rest}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
