import React from 'react';
import type { ReactNode } from 'react';
import Navbar from '@components/navbar/navbar';
import LayoutContainer, { LayoutContent } from './base-layout.styles';
import type { BaseLayoutHeadProps } from './head/base-layout-head';
import BaseLayoutHead from './head/base-layout-head';
import BaseLayoutFooter from './footer/base-layout-footer';

type BaseLayoutProps = {
  children: ReactNode;
  /** Optional head props used for seo data. */
  headProps?: BaseLayoutHeadProps;
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <LayoutContainer>
      {/* HEAD */}
      <BaseLayoutHead {...headProps} />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <LayoutContent>{children}</LayoutContent>

      <BaseLayoutFooter />
    </LayoutContainer>
  );
};

export default BaseLayout;
