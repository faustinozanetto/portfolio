import React from 'react';
import Link from 'next/link';

type NavbarLinkProps = {
  children: React.ReactNode;
  /** Link to pass to the styled a element. */
  href?: string;
};

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { children, href = '/' } = props;

  return (
    <Link href={href}>
      <span className="font-semibold text-primary transition-all hover:underline hover:decoration-primary hover:decoration-2">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
