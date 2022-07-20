import React from 'react';
import type { IStyledGridProps } from './grid.styles';
import StyledGrid from './grid.styles';

type IGridProps = React.HTMLAttributes<HTMLDivElement> &
  IStyledGridProps & {
    children?: React.ReactNode;
  };

const Grid: React.FC<IGridProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledGrid as="div" {...rest}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
