import React from 'react';
import Box from '../box/box';
import type { StyledButtonProps } from './button.styles';
import { ButtonIconContainer } from './button.styles';
import StyledButton from './button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    children: React.ReactNode;
    href?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
  };

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    href,
    variant = 'solid',
    color = 'black',
    hoverColor = 'white',
    backgroundColor = 'white',
    hoverBackgroundColor = '#18181b',
    borderRadius = 'md',
    fontWeight = 'bold',
    fontSize = 'md',
    margin = '0.5rem',
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  return (
    <StyledButton
      as={href !== '' ? 'button' : 'a'}
      type="button"
      href={href}
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
      {leftIcon && <ButtonIconContainer>{leftIcon}</ButtonIconContainer>}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
