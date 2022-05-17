import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  max-width: 640px;
  padding-left: ${(props) => props.theme.spacing.md};
  padding-right: ${(props) => props.theme.spacing.md};

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 768px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 1024px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 1280px;
  }
`;

export default StyledContainer;
