import styled from 'styled-components';

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: black;
`;

export const LayoutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default LayoutContainer;
