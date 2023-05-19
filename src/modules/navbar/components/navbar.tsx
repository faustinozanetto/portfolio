import ThemeToggler from '@modules/theme/components/theme-toggler';
import React from 'react';

import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full bg-neutral-200 drop-shadow-md dark:bg-neutral-800">
      <nav className="mx-auto flex w-full max-w-5xl flex-row items-center justify-center p-4 md:max-w-6xl md:justify-between lg:max-w-7xl">
        {/* Left: NavbarLogo */}
        <NavbarLogo />

        {/* RIGHT */}
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-6">
          {/* Links */}
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>

          <ThemeToggler />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
