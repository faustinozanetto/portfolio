import React from 'react';
import Link from 'next/link';

type INavbarLinkProps = {
  children: React.ReactNode;
  /** Link to pass to the styled a element. */
  href?: string;
};

const NavbarLink: React.FC<INavbarLinkProps> = (props) => {
  const { children, href = '/' } = props;

  return (
    <Link href={href} passHref>
      <span className="text-lg font-semibold text-blue-500  transition-all hover:text-blue-400 hover:underline hover:decoration-2 hover:decoration-blue-400">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
