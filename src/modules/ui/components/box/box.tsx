import React from 'react';
import StyledBox from './box.styles';

type IBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Box: React.FC<IBoxProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledBox {...rest}>{children}</StyledBox>;
};
export default Box;
