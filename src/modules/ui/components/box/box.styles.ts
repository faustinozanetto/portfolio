import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { StyledBaseProps } from '../base/base.styled';
import Base from '../base/base.styled';

export type IStyledBoxProps = StyledBaseProps;

const StyledBox = withProps<IStyledBoxProps>()(styled(Base))`
  position: relative;
  overflow: hidden;
`;

export default StyledBox;
