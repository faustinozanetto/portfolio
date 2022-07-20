import styled from 'styled-components';

const StyledNavbarLogo = styled.a`
  display: flex;
  flex: 0 0 auto;
  position: relative;
  float: left;
  align-items: center;
  padding-left: 0;
  margin-right: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.body};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

export default StyledNavbarLogo;
