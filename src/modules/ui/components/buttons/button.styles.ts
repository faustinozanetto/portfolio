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
  display: inline-flex;
  position: relative;
  align-items: center;
  white-space: nowrap;
  vertical-align: middle;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  text-decoration: none;
`;

const StyledButton = styled(Typography)<StyledButtonProps>`
  ${BaseButon}
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
    padding-inline-start: ${props.theme.spacing.sm};
    padding-inline-end: ${props.theme.spacing.sm};
    font-size: ${props.theme.fontSize.sm};
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
  `}

  ${(props) =>
    props.size === 'md' &&
    `
    padding-inline-start: ${props.theme.spacing.md};
    padding-inline-end: ${props.theme.spacing.md};
    font-size: ${props.theme.fontSize.md};
    padding: ${props.theme.spacing.md} ${props.theme.spacing.lg};
  `}

  ${(props) =>
    props.size === 'lg' &&
    `
    padding-inline-start: ${props.theme.spacing.lg};
    padding-inline-end: ${props.theme.spacing.lg};
    font-size: ${props.theme.fontSize.lg};
    padding: ${props.theme.spacing.lg} ${props.theme.spacing.xl};
  `}

  ${(props) =>
    props.size === 'xl' &&
    `
    padding-inline-start: ${props.theme.spacing.xl};
    padding-inline-end: ${props.theme.spacing.xl};
    font-size: ${props.theme.fontSize.xl};
    padding: ${props.theme.spacing.lg} ${props.theme.spacing['2xl']};
  `}
  }
`;

export const ButtonIconContainer = styled.span`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  margin-inline-end: 0.5rem;
`;

export default StyledButton;
