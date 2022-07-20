import styled from 'styled-components';
import Container from '@modules/ui/components/container/container';

const StyledNavbar = styled.div`
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
  width: 100%;
  float: none;
`;

export const NavbarLeft = styled.div`
  display: flex;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export default StyledNavbar;
