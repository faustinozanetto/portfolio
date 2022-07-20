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
};

const Section: React.FC<ISectionProps> = (props) => {
  const { children, hasDivider = false, dividerColor, ...rest } = props;
  const theme = useTheme();

  return (
    <Box width="100%" {...rest}>
      <Container marginTop={theme.spacing['2xl']} marginBottom="20rem">
        {children}
      </Container>
      {hasDivider && <SectionDivider dividerColor={dividerColor} />}
    </Box>
  );
};

export default Section;
