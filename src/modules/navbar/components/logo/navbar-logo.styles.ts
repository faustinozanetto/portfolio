import Typography from '@modules/ui/components/base/typography.styled';
import styled from 'styled-components';

const StyledNavbarLogo = styled(Typography)`
  display: flex;
  flex: 0 0 auto;
  position: relative;
  float: left;
  align-items: center;
  cursor: pointer;
  padding-left: 0;
  margin-right: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fontSize['2xl']};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.body};
  color: ${(props) => props.theme.colors.primary[200]};
  text-decoration: none;
`;

export default StyledNavbarLogo;
