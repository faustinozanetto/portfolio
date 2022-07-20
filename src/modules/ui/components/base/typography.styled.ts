import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { StyledBaseProps } from './base.styled';
import Base from './base.styled';

export type StyledTypographyProps = StyledBaseProps & {
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: string;
  fontFamily?: string;
  lineHeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};

const Typography = withProps<StyledTypographyProps>()(styled(Base))`
  ${(props) => {
    if (props.fontWeight) {
      return `font-weight: ${props.theme.fontWeight[props.fontWeight]};`;
    }
  }}

  ${(props) => {
    if (props.fontSize) {
      return `font-size: ${props.theme.fontSize[props.fontSize]};`;
    }
  }}

  ${(props) => {
    if (props.lineHeight) {
      return `line-height: ${props.lineHeight};`;
    }
  }}

  ${(props) => {
    if (props.textAlign) {
      return `text-align: ${props.textAlign};`;
    }
  }}
  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};
  color: ${(props) => props.theme.colors.text};
`;

export default Typography;
