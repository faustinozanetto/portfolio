import Link from 'next/link';
import React from 'react';
import { useTheme } from 'styled-components';
import type { ButtonProps } from './button';
import StyledButton, { ButtonIconContainer } from './button.styles';

type LinkButtonProps = ButtonProps & {
  href: string;
  target?: string;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    href = '/',
    variant = 'solid',
    color = 'black',
    hoverColor = 'white',
    backgroundColor = 'white',
    hoverBackgroundColor = theme.colors.primary[500],
    borderRadius = 'md',
    fontWeight = 'bold',
    fontSize = 'md',
    margin = '0.5rem',
    target = '_self',
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  return (
    <StyledButton
      as={Link}
      href={href}
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
      target={target}
      {...rest}
    >
      {leftIcon && <ButtonIconContainer>{leftIcon}</ButtonIconContainer>}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default LinkButton;
