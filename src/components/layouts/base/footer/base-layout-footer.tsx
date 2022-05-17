import React from 'react';
import Heading from '@components/ui/heading/heading';
import StyledFooter, { FooterContainer } from './base-layout-footer.styles';

export type BaseLayoutFooterProps = {
  children: React.ReactNode;
};

const BaseLayoutFooter: React.FC<BaseLayoutFooterProps> = (props) => {
  const { children } = props;

  return (
    <StyledFooter>
      <FooterContainer>
        <Heading>Made with ❤️ from Argetina 🇦🇷</Heading>
        <Heading size="md" style={{ marginBottom: 0 }}>
          © 2022 Faustino Zanetto. All rights reserved
        </Heading>
      </FooterContainer>
    </StyledFooter>
  );
};

export default BaseLayoutFooter;
