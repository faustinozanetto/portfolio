import styled from 'styled-components';

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background[100]};
`;

export const LayoutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.xl};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export default LayoutContainer;
