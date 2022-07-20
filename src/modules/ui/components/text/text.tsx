import React from 'react';
import type { StyledTypographyProps } from '../base/typography.styled';
import StyledText from './text.styled';

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  StyledTypographyProps & {
    children: React.ReactNode;
  };

const Text: React.FC<TextProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledText as="p" {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
