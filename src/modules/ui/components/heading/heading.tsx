import React from 'react';
import { useTheme } from 'styled-components';
import type { StyledTypographyProps } from '../base/typography.styled';
import StyledHeading from './heading.styles';

export type IHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  StyledTypographyProps & {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

const Heading: React.FC<IHeadingProps> = (props) => {
  const theme = useTheme();
  const { children, as = 'h1', padding = theme.spacing.xs, ...rest } = props;
  return (
    <StyledHeading as={as} padding={padding} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
