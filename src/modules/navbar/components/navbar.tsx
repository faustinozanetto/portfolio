import React from 'react';

import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const {} = props;

  return (
    <div className="flex w-full bg-neutral-200 drop-shadow-md dark:bg-neutral-800">
      <nav className="mx-auto flex w-full max-w-5xl flex-row items-center justify-between p-4">
        {/* Left: NavbarLogo */}
        <div className="flex">
          <NavbarLogo />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center space-x-6">
          {/* Links */}
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
