import type { StyledTypographyProps } from '@modules/ui/components/base/typography.styled';
import Typography from '@modules/ui/components/base/typography.styled';
import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';

const StyledNavbarLink = withProps<StyledTypographyProps>()(styled(Typography))`
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.text};
  padding-left: ${(props) => props.theme.spacing.md};
  padding-right: ${(props) => props.theme.spacing.md};

  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    color: ${(props) => props.theme.colors.primary[400]};
    font-weight: ${(props) => props.theme.fontWeight.extrabold};
  }
`;

export default StyledNavbarLink;
