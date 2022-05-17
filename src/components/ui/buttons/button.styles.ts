import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';

export type StyledButtonProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const StyledButton = withProps<StyledButtonProps>()(styled.button)`
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

  ${(props) =>
    props.size === 'sm' &&
    `
    padding: ${props.theme.spacing.md} ${props.theme.spacing.lg};
    font-size: ${props.theme.fontSize.sm};
  `}

  ${(props) =>
    props.size === 'md' &&
    `
    padding: ${props.theme.spacing.lg} ${props.theme.spacing.xl};
    font-size: ${props.theme.fontSize.md};
  `}

  ${(props) =>
    props.size === 'lg' &&
    `
    padding: ${props.theme.spacing.xl} ${props.theme.spacing.xxl};
    font-size: ${props.theme.fontSize.lg};
  `}

  ${(props) =>
    props.size === 'xl' &&
    `
    padding: ${props.theme.spacing.xl} ${props.theme.spacing.xxl};
    font-size: ${props.theme.fontSize.xl};
  `}
  }
`;
export default StyledButton;
