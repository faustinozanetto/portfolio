import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';

export type IStyledBaseProps = {
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
};

const Base = withProps<IStyledBaseProps>()(styled.span)`
  ${(props) => {
    if (props.padding) {
      return `padding: ${props.padding};`;
    }
  }}

   ${(props) => {
     if (props.paddingTop) {
       return `padding-top: ${props.paddingTop};`;
     }
   }}

   ${(props) => {
     if (props.paddingBottom) {
       return `padding-bottom: ${props.paddingBottom};`;
     }
   }}

   ${(props) => {
     if (props.paddingLeft) {
       return `padding-left: ${props.paddingLeft};`;
     }
   }}

   ${(props) => {
     if (props.paddingRight) {
       return `padding-right: ${props.paddingRight};`;
     }
   }}

  ${(props) => {
    if (props.margin) {
      return `margin: ${props.margin};`;
    }
  }}

   ${(props) => {
     if (props.marginTop) {
       return `margin-top: ${props.marginTop};`;
     }
   }}

   ${(props) => {
     if (props.marginBottom) {
       return `margin-bottom: ${props.marginBottom};`;
     }
   }}

   ${(props) => {
     if (props.marginLeft) {
       return `margin-left: ${props.marginLeft};`;
     }
   }}
   ${(props) => {
     if (props.marginRight) {
       return `margin-right: ${props.marginRight};`;
     }
   }}

  ${(props) => {
    if (props.width) {
      return `width: ${props.width};`;
    }
  }}

 ${(props) => {
   if (props.height) {
     return `height: ${props.height};`;
   }
 }}

   ${(props) => {
     if (props.maxWidth) {
       return `max-width: ${props.maxWidth};`;
     }
   }}
   ${(props) => {
     if (props.maxHeight) {
       return `max-height: ${props.maxHeight};`;
     }
   }}

 ${(props) => {
   if (props.minWidth) {
     return `min-width: ${props.minWidth};`;
   }
 }}

 ${(props) => {
   if (props.minHeight) {
     return `min-height: ${props.minHeight};`;
   }
 }}

  ${(props) => {
    if (props.color) {
      return `color: ${props.color};`;
    }
  }};

  ${(props) => {
    if (props.backgroundColor) {
      return `background-color: ${props.backgroundColor};`;
    }
  }}

  ${(props) => {
    if (props.boxShadow) {
      return `box-shadow: ${props.boxShadow};`;
    }
  }}

  ${(props) => {
    if (props.borderRadius) {
      return `border-radius: ${props.theme.borderRadius[props.borderRadius]};`;
    }
  }}
`;

export default Base;
