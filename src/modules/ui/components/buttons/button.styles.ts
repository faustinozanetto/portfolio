import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { StyledTypographyProps } from '../base/typography.styled';
import Typography from '../base/typography.styled';

export type StyledButtonProps = StyledTypographyProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline';
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  hoverColor?: string;
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
};

const BaseButon = `
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledButton = withProps<StyledButtonProps>()(styled(Typography))`
  ${BaseButon}
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.borderRadius[props.borderRadius]};
  transition: ${(props) => props.theme.transitions.default};

  ${(props) => {
    if (props.variant === 'solid') {
      return `
        background-color: ${props.backgroundColor};
        color: ${props.color};
        border: none;

        &:hover {
          background-color: ${props.hoverBackgroundColor};
          color: ${props.hoverColor};
        }
    `;
    }
  }}

  ${(props) => {
    if (props.variant === 'outline') {
      return `
        border: 2px solid ${props.backgroundColor};
        color: ${props.color};
        background-color: transparent;

        &:hover {
          background-color: ${props.hoverBackgroundColor};
          color: ${props.hoverColor};
        }
    `;
    }
  }}

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
