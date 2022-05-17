import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { StyledTypographyProps } from '../base/typography.styled';
import Typography from '../base/typography.styled';

const StyledHeading = withProps<StyledTypographyProps>()(styled(Typography))`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-family: ${(props) => props.theme.fontFamily.body};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export default StyledHeading;
