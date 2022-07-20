import React from 'react';
import Heading from '@modules/ui/components/heading/heading';
import StyledFooter, { FooterContainer } from './layout-footer.styles';

export type LayoutFooterProps = {};

const LayoutFooter: React.FC<LayoutFooterProps> = (props) => {
  const {} = props;

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

export default LayoutFooter;
