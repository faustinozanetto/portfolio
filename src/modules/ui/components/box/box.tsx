import React from 'react';
import StyledBox from './box.styles';
import type { IStyledBoxProps } from './box.styles';

export type IBoxProps = React.HTMLAttributes<HTMLDivElement> &
  IStyledBoxProps & {
    children?: React.ReactNode;
  };

const Box: React.FC<IBoxProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledBox as="div" {...rest}>
      {children}
    </StyledBox>
  );
};
export default Box;
