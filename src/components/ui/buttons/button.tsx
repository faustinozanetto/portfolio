import React from 'react';
import StyledButton from './button.styles';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
