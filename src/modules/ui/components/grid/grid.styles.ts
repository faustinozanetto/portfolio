import styled from 'styled-components';
import type { IStyledBaseProps } from '../base/base.styled';
import Base from '../base/base.styled';

export type IStyledGridProps = IStyledBaseProps & {
  gap?: string;
  templateColumns?: string;
  templateRows?: string;
};

const StyledGrid = styled(Base)<IStyledGridProps>`
  display: grid;
  grid-gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.templateColumns};
  grid-template-rows: ${(props) => props.templateRows};
`;

export default StyledGrid;
