import Link from 'next/link';
import React from 'react';

const NavbarLogo: React.FC = () => {
  return (
    <Link href="/">
      <span className="text-3xl font-bold text-blue-500 transition-colors hover:text-blue-400">Faustino</span>
    </Link>
  );
};

export default NavbarLogo;
