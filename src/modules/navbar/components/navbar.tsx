'use client';

import React from 'react';
import ThemeToggler from '@modules/theme/components/theme-toggler';

import useRevealOnScroll from '@modules/common/hooks/use-reveal-on-scroll';
import clsx from 'clsx';
import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';
import MobileNavbar from './mobile-navbar';

const Navbar: React.FC = () => {
  const { show } = useRevealOnScroll();

  return (
    <div
      className={clsx(
        'bg-background z-[999] border-b-2 w-full p-4 backdrop-blur-lg flex items-center h-20 transition-all',
        show && 'fixed top-0 left-0'
      )}
    >
      <div className="container flex items-center justify-between px-0">
        <MobileNavbar />
        <NavbarLogo />
        <nav className="hidden md:flex md:items-center md:justify-center md:gap-4">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <ThemeToggler />
        </nav>
        <ThemeToggler className="flex md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
