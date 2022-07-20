import type { IStyledBoxProps } from '@modules/ui/components/box/box.styles';
import withProps from '@utils/theming/theming-utils';
import StyledBox from '@modules/ui/components/box/box.styles';
import styled from 'styled-components';

export type IStyledDividerProps = IStyledBoxProps;

const StyledSectionDivider = withProps<IStyledDividerProps>()(styled(StyledBox))`
  display: block;
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: auto;
`;

export default StyledSectionDivider;
