import styled from 'styled-components';
import type { IStyledBaseProps } from '../base/base.styled';
import Base from '../base/base.styled';

export type IStyledFlexProps = IStyledBaseProps & {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
};

export const StyledFlex = styled(Base)<IStyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex: ${(props) => props.flex};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-basis: ${(props) => props.flexBasis};
`;
