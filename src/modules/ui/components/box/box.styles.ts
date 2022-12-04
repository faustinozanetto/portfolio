import styled from 'styled-components';
import type { IStyledBaseProps } from '../base/base.styled';
import Base from '../base/base.styled';

export type IStyledBoxProps = IStyledBaseProps;

const StyledBox = styled(Base)<IStyledBoxProps>`
  position: relative;
  overflow: hidden;
`;

export default StyledBox;
