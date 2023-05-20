import Link from 'next/link';
import React from 'react';

const NavbarLogo: React.FC = () => {
  return (
    <Link href="/" title="Home Page">
      <span className="text-3xl font-bold text-primary-500 transition-colors hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500">
        Faustino
      </span>
    </Link>
  );
};

export default NavbarLogo;
