import React from 'react';
import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';
import StyledNavbar, { Navigation, NavbarContainer, NavbarLeft, NavbarRight } from './navbar.styles';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { children } = props;

  return (
    <StyledNavbar>
      <NavbarContainer>
        <Navigation>
          {/* LEFT */}
          <NavbarLeft>
            <NavbarLogo />
          </NavbarLeft>

          {/* RIGHT */}
          <NavbarRight>
            {/* Links */}
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/blog">Blog</NavbarLink>
            <NavbarLink href="/contact">Contact</NavbarLink>
          </NavbarRight>
        </Navigation>
      </NavbarContainer>
    </StyledNavbar>
  );
};
export default Navbar;
