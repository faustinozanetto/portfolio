import Link from 'next/link';
import React from 'react';

type INavbarLinkProps = {
  children: React.ReactNode;
  /** Link to pass to the styled a element. */
  href?: string;
};

const NavbarLink: React.FC<INavbarLinkProps> = (props) => {
  const { children, href = '/' } = props;

  return (
    <Link href={href}>
      <span className="font-medium text-primary-700 transition-all hover:text-primary-800 hover:underline hover:decoration-primary-400 hover:decoration-2 dark:text-primary-400 dark:hover:text-primary-200 dark:hover:decoration-primary-200">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
