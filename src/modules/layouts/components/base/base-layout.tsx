import React from 'react';
import type { ReactNode } from 'react';
import Navbar from '@modules/navbar/components/navbar';
import LayoutFooter from './footer/layout-footer';
import BaseLayoutHead from './head/base-layout-head';

interface IBaseLayoutProps {
  children: ReactNode;
  /** Optional head props used for seo data. */
  headProps?: React.ComponentPropsWithoutRef<typeof BaseLayoutHead>;
}

const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <div className="flex min-h-screen flex-col overflow-hidden font-poppins subpixel-antialiased transition-all">
      {/* HEAD */}
      <BaseLayoutHead {...headProps} />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="flex flex-1 flex-col bg-gray-100 dark:bg-gray-900">{children}</div>

      {/* FOOTER */}
      <LayoutFooter />
    </div>
  );
};

export default BaseLayout;
