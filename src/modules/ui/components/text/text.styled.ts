import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { StyledTypographyProps } from '../base/typography.styled';
import Typography from '../base/typography.styled';

const StyledText = withProps<StyledTypographyProps>()(styled(Typography))`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-family: ${(props) => props.theme.fontFamily.body};
  color: ${(props) => props.theme.colors.text};
`;

export default StyledText;
