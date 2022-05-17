import React from 'react';
import type { StyledTypographyProps } from '../base/typography.styled';
import StyledHeading from './heading.styled';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  StyledTypographyProps & {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

const Heading: React.FC<HeadingProps> = (props) => {
  const { children, as = 'h1', ...rest } = props;
  return (
    <StyledHeading as={as} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
