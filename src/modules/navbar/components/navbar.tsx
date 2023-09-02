import ThemeToggler from '@modules/theme/components/theme-toggler';
import React from 'react';

import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';

const Navbar: React.FC = () => (
  <div className="bg-background z-[999] border-b-2 border-b-border w-full p-4 backdrop-blur-lg">
    <div className="container mx-auto flex items-center justify-center md:justify-between">
      <NavbarLogo />
      <nav className="hidden md:flex md:items-center md:justify-center md:space-x-4">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/blog">Blog</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
        <ThemeToggler />
      </nav>
    </div>
  </div>
);
export default Navbar;
