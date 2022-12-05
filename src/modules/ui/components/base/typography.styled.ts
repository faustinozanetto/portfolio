import styled from 'styled-components';
import type { IStyledBaseProps } from './base.styled';
import Base from './base.styled';

export type StyledTypographyProps = IStyledBaseProps;

const Typography = styled(Base)<StyledTypographyProps>`
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

  ${(props) => {
    if (props.fontFamily) {
      return `font-family: ${props.fontFamily};`;
    }
  }}

  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};
`;

export default Typography;
