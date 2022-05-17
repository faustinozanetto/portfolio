import React from 'react';
import type { StyledButtonProps } from './button.styles';
import StyledButton from './button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    children: React.ReactNode;
  };

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledButton as="button" type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
