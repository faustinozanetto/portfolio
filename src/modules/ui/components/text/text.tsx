import React from 'react';
import { useTheme } from 'styled-components';
import type { StyledTypographyProps } from '../base/typography.styled';
import StyledText from './text.styles';

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  StyledTypographyProps & {
    children: React.ReactNode;
  };

const Text: React.FC<TextProps> = (props) => {
  const theme = useTheme();
  const { children, padding = theme.spacing.xs, color = 'white', ...rest } = props;
  return (
    <StyledText as="p" padding={padding} color={color} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
