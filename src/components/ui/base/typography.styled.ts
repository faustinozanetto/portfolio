import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';

export type StyledTypographyProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'semibold' | 'bold';
};

const Typography = withProps<StyledTypographyProps>()(styled.span)` ${(props) =>
  props.weight === 'bold' &&
  `
    font-weight: ${props.theme.fontWeight.bold} !important;
  `}

  ${(props) =>
    props.weight === 'semibold' &&
    `
    font-weight: ${props.theme.fontWeight.semibold} !important;
  `}

  ${(props) =>
    props.weight === 'normal' &&
    `
    font-weight: ${props.theme.fontWeight.medium} !important;
  `}

  ${(props) =>
    props.size === 'sm' &&
    `
    font-size: ${props.theme.fontSize.sm} !important;
  `}
  ${(props) =>
    props.size === 'md' &&
    `
    font-size: ${props.theme.fontSize.md} !important;
  `}
  ${(props) =>
    props.size === 'lg' &&
    `
    font-size: ${props.theme.fontSize.lg} !important;
  `}
  ${(props) =>
    props.size === 'xl' &&
    `
    font-size: ${props.theme.fontSize.xl} !important;
  `}`;

export default Typography;
