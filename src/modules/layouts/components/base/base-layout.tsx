import React from 'react';
import type { ReactNode } from 'react';
import Navbar from '@components/navbar/navbar';
import LayoutContainer, { LayoutContent } from './base-layout.styles';
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
    <LayoutContainer>
      {/* HEAD */}
      <BaseLayoutHead {...headProps} />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <LayoutContent>{children}</LayoutContent>

      {/* FOOTER */}
      <LayoutFooter />
    </LayoutContainer>
  );
};

export default BaseLayout;
