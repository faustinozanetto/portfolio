import React from 'react';
import { useTheme } from 'styled-components';
import type { StyledButtonProps } from './button.styles';
import StyledButton, { ButtonIconContainer } from './button.styles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    children: React.ReactNode;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
  };

const Button: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();

  const {
    children,
    variant = 'solid',
    color = 'black',
    hoverColor = 'white',
    backgroundColor = 'white',
    hoverBackgroundColor = theme.colors.primary[500],
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
      {leftIcon && <ButtonIconContainer>{leftIcon}</ButtonIconContainer>}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
