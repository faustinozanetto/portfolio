import type { IStyledFlexProps } from '@modules/ui/components/flex/flex.styles';
import withProps from '@utils/theming/theming-utils';
import { StyledFlex } from '@modules/ui/components/flex/flex.styles';
import styled from 'styled-components';

const StyledHomeProjectCard = withProps<IStyledFlexProps>()(styled(StyledFlex))`
  overflow: hidden;
`;

export const HomeProjectCardImageContainer = styled.div`
  position: relative;
  height: 150px;
`;

export default StyledHomeProjectCard;
