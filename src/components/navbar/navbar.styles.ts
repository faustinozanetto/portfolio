import Container from '@components/ui/container/container';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)``;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  height: 90px;
  float: none;
`;

export const NavbarLeft = styled.div`
  display: flex;
`;

export const NavbarRight = styled.div`
  display: flex;
`;

export default StyledNavbar;
