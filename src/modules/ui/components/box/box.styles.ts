import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { IStyledBaseProps } from '../base/base.styled';
import Base from '../base/base.styled';

export type IStyledBoxProps = IStyledBaseProps;

const StyledBox = withProps<IStyledBoxProps>()(styled(Base))`
  position: relative;
  overflow: hidden;
`;

export default StyledBox;
