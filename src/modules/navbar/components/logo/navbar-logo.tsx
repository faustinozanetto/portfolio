import Link from 'next/link';
import React from 'react';
import StyledNavbarLogo from './navbar-logo.styles';

interface INavbarLogoProps {}

const NavbarLogo: React.FC<INavbarLogoProps> = (props) => {
  const {} = props;

  return (
    <Link href="/">
      <StyledNavbarLogo>Faustino</StyledNavbarLogo>
    </Link>
  );
};

export default NavbarLogo;
