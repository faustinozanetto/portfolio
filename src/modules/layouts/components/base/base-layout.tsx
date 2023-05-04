import Navbar from '@modules/navbar/components/navbar';
import type { ReactNode } from 'react';
import React from 'react';

import LayoutFooter from './footer/layout-footer';
import BaseLayoutHead from './head/base-layout-head';

type BaseLayoutProps = {
  children: ReactNode;
  /** Optional head props used for seo data. */
  headProps?: React.ComponentPropsWithoutRef<typeof BaseLayoutHead>;
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <div className="flex min-h-screen flex-col overflow-hidden subpixel-antialiased transition-all">
      <BaseLayoutHead {...headProps} />
      <Navbar />
      <div className="flex flex-1 flex-col bg-neutral-100 dark:bg-neutral-900">{children}</div>
      <LayoutFooter />
    </div>
  );
};

export default BaseLayout;
