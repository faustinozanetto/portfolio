import Box from '@modules/ui/components/box/box';
import React from 'react';
import { useTheme } from 'styled-components';

interface ISectionProps {
  children?: React.ReactNode;
}

const Section: React.FC<ISectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box marginTop={theme.spacing.xl} marginBottom={theme.spacing.xl} width="100%" padding={theme.spacing.xl}>
      {children}
    </Box>
  );
};

export default Section;
