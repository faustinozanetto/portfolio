import React from 'react';
import StyledNavbar, { Navigation, NavbarContainer, NavbarLeft, NavbarRight } from './navbar.styles';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { children } = props;

  return (
    <StyledNavbar>
      <NavbarContainer>
        <Navigation>
          {/* LEFT */}
          <NavbarLeft></NavbarLeft>

          {/* RIGHT */}
          <NavbarRight></NavbarRight>
        </Navigation>
      </NavbarContainer>
    </StyledNavbar>
  );
};
export default Navbar;
