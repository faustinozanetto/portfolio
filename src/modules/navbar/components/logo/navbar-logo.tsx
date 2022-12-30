import Link from 'next/link';
import React from 'react';

const NavbarLogo: React.FC = () => {
  return (
    <Link href="/">
      <span className="text-3xl font-bold text-primary-500 transition-colors hover:text-primary-400 dark:text-primary-300 dark:hover:text-primary-200">
        Faustino
      </span>
    </Link>
  );
};

export default NavbarLogo;
