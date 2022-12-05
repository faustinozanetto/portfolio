import React from 'react';
import NavbarLink from './link/navbar-link';
import NavbarLogo from './logo/navbar-logo';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const {} = props;

  return (
    <div className="flex w-full bg-gray-200 shadow-lg">
      <nav className="flex flex-row mx-auto w-full max-w-6xl justify-between items-center p-4">
        {/* Left: NavbarLogo */}
        <div className="flex">
          <NavbarLogo />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center space-x-2">
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
