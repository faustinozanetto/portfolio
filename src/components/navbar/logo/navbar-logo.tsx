import React from 'react';
import StyledNavbarLogo from './navbar-logo.styles';

type NavbarLogoProps = {};

const NavbarLogo: React.FC<NavbarLogoProps> = (props) => {
  const { children } = props;

  return <StyledNavbarLogo href="/">Faustino</StyledNavbarLogo>;
};

export default NavbarLogo;
