import React from 'react';
import type { StyledTypographyProps } from '@components/ui/base/typography.styled';
import Link from 'next/link';
import StyledNavbarLink from './navbar-link.styles';

export type NavbarLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  StyledTypographyProps & {
    children: React.ReactNode;
    /** Link to pass to the styled a element. */
    href?: string;
  };

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { children, href = '', ...rest } = props;

  return (
    <Link href={href} passHref>
      <StyledNavbarLink as="a" {...rest}>
        {children}
      </StyledNavbarLink>
    </Link>
  );
};

export default NavbarLink;
