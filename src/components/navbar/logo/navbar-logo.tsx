import React from 'react';
import StyledNavbarLogo from './navbar-logo.styles';

interface INavbarLogoProps {}

const NavbarLogo: React.FC<INavbarLogoProps> = (props) => {
  const {} = props;

  return <StyledNavbarLogo href="/">Faustino</StyledNavbarLogo>;
};

export default NavbarLogo;
