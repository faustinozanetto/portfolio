import type { IBoxProps } from '@modules/ui/components/box/box';
import Box from '@modules/ui/components/box/box';
import Container from '@modules/ui/components/container/container';
import React from 'react';
import { useTheme } from 'styled-components';
import SectionDivider from './divider/section-divider';

type ISectionProps = IBoxProps & {
  children?: React.ReactNode;
  hasDivider?: boolean;
  dividerColor?: string;
  containerStyles?: IBoxProps;
};

const Section: React.FC<ISectionProps> = (props) => {
  const { children, hasDivider = false, dividerColor, containerStyles, ...rest } = props;
  const theme = useTheme();

  return (
    <Box {...rest}>
      <Container marginTop={theme.spacing['2xl']} {...containerStyles}>
        {children}
      </Container>
      {hasDivider && <SectionDivider dividerColor={dividerColor} />}
    </Box>
  );
};

export default Section;
