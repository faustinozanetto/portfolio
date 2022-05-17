import Container from '@components/ui/container/container';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  margin-top: auto;
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;

export const FooterContainer = styled(Container)`
  display: flex;
  padding-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;

export default StyledFooter;
