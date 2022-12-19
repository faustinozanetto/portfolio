import React from 'react';

import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';
import ThemeToggler from './theme-toggler/theme-toggler';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const {} = props;

  return (
    <div className="flex w-full bg-neutral-200 drop-shadow-md dark:bg-neutral-800">
      <nav className="mx-auto flex w-full max-w-6xl flex-row items-center justify-center p-4 sm:justify-between">
        {/* Left: NavbarLogo */}
        <NavbarLogo />

        {/* RIGHT */}
        <div className="hidden sm:flex sm:items-center sm:justify-center sm:space-x-6">
          {/* Links */}
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>

          <ThemeToggler />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
