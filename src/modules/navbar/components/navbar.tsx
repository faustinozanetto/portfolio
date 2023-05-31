import ThemeToggler from '@modules/theme/components/theme-toggler';
import React from 'react';

import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';

const Navbar: React.FC = () => {
  return (
    <div className="bg-background-200/70 dark:bg-background-800/70 z-[999] h-20 border-b-2 border-b-border w-full p-4 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-center md:justify-between">
        {/* Left: NavbarLogo */}
        <NavbarLogo />

        {/* RIGHT */}
        <nav className="hidden md:flex md:items-center md:justify-center md:space-x-4">
          {/* Links */}
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>

          <ThemeToggler />
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
