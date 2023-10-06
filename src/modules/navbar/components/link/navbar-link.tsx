import React from 'react';
import Link, { LinkProps } from 'next/link';

type NavbarLinkProps = LinkProps & {
  children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Link {...rest}>
      <span className="font-semibold text-primary transition-all hover:underline hover:decoration-primary hover:decoration-2">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
