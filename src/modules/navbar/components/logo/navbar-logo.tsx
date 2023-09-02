import Link from 'next/link';
import React from 'react';

const NavbarLogo: React.FC = () => (
  <Link href="/" title="Home Page">
    <span className="text-3xl font-bold text-primary transition-colors hover:text-secondary">Faustino</span>
  </Link>
);

export default NavbarLogo;
