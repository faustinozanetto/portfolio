import React from 'react';
import type { StyledTypographyProps } from '../base/typography.styled';
import StyledHeading from './heading.styles';

export type IHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  StyledTypographyProps & {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  };

const Heading: React.FC<IHeadingProps> = (props) => {
  const { children, as = 'h1', color = 'white', ...rest } = props;
  return (
    <StyledHeading as={as} color={color} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
