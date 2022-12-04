import type { IStyledFlexProps } from '@modules/ui/components/flex/flex.styles';
import { StyledFlex } from '@modules/ui/components/flex/flex.styles';
import styled from 'styled-components';

const StyledHomeProjectCard = styled(StyledFlex)<IStyledFlexProps>`
  overflow: hidden;
`;

export const HomeProjectCardImageContainer = styled.div`
  position: relative;
  height: 150px;
`;

export default StyledHomeProjectCard;
