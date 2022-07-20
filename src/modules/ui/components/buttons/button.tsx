import React from 'react';
import type { StyledButtonProps } from './button.styles';
import StyledButton from './button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    children: React.ReactNode;
  };

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'solid',
    color = 'black',
    hoverColor = 'white',
    backgroundColor = 'white',
    hoverBackgroundColor = '#18181b',
    borderRadius = 'md',
    fontWeight = 'bold',
    fontSize = 'sm',
    margin = '0.5rem',
    ...rest
  } = props;
  return (
    <StyledButton
      as="button"
      type="button"
      variant={variant}
      color={color}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      margin={margin}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
