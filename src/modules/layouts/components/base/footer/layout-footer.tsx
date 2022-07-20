import React from 'react';
import Heading from '@modules/ui/components/heading/heading';
import StyledFooter, { FooterContainer } from './layout-footer.styles';

interface ILayoutFooterProps {}

const LayoutFooter: React.FC<ILayoutFooterProps> = (props) => {
  const {} = props;

  return (
    <StyledFooter>
      <FooterContainer>
        <Heading fontSize="md" margin="0">
          Made with ❤️ from Argetina 🇦🇷
        </Heading>
        <Heading fontSize="md" margin="0">
          © 2022 Faustino Zanetto. All rights reserved
        </Heading>
      </FooterContainer>
    </StyledFooter>
  );
};

export default LayoutFooter;
