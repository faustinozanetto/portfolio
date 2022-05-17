import React, { ReactNode } from 'react';
import LayoutContainer from './base-layout.styles';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children } = props;

  return <LayoutContainer>{children}</LayoutContainer>;
};

export default BaseLayout;
