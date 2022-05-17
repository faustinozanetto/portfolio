import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.borderRadius.xxl};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.body};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary[400]};
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary[500]};
  }
`;
export default StyledButton;
