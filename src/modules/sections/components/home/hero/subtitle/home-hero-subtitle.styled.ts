import type { StyledTypographyProps } from '@modules/ui/components/base/typography.styled';
import Heading from '@modules/ui/components/heading/heading';
import styled from 'styled-components';

const StyledHomeHeroSubtitle = styled(Heading)<StyledTypographyProps>`
  z-index: 1;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 93%;
    height: 100%;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.primary[500]};
  }
`;

export default StyledHomeHeroSubtitle;
