import styled from 'styled-components';

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const LayoutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LayoutContainer;
