import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { IStyledBaseProps } from '../base/base.styled';
import Base from '../base/base.styled';

export type IStyledGridProps = IStyledBaseProps & {
  gap?: string;
  templateColumns?: string;
  templateRows?: string;
};

const StyledGrid = withProps<IStyledGridProps>()(styled(Base))`
  display:grid;
  grid-gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.templateColumns};
  grid-template-rows: ${(props) => props.templateRows};
`;

export default StyledGrid;
