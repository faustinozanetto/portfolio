import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@modules/ui/components/sheet/sheet';
import { Button } from '@modules/ui/components/buttons/button';
import NavbarLink from './link/navbar-link';

const MobileNavbar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="visible md:hidden" aria-label="Collapse Navbar" variant="ghost" size="icon">
          <svg
            className="stroke-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="mt-20 z-[999]">
        <nav className="flex flex-col gap-2">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
