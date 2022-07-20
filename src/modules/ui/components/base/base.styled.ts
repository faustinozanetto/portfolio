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
};

const Base = withProps<IStyledBaseProps>()(styled.span)`
  ${(props) => {
    if (props.padding) {
      return `padding: ${props.padding};`;
    }

    if (props.paddingTop) {
      return `padding-top: ${props.paddingTop};`;
    }

    if (props.paddingBottom) {
      return `padding-bottom: ${props.paddingBottom};`;
    }

    if (props.paddingLeft) {
      return `padding-left: ${props.paddingLeft};`;
    }

    if (props.paddingRight) {
      return `padding-right: ${props.paddingRight};`;
    }
  }}

  ${(props) => {
    if (props.margin) {
      return `margin: ${props.margin};`;
    }

    if (props.marginTop) {
      return `margin-top: ${props.marginTop};`;
    }

    if (props.marginBottom) {
      return `margin-bottom: ${props.marginBottom};`;
    }

    if (props.marginLeft) {
      return `margin-left: ${props.marginLeft};`;
    }
    if (props.marginRight) {
      return `margin-right: ${props.marginRight};`;
    }
  }}

  ${(props) => {
    if (props.width) {
      return `width: ${props.width};`;
    }
    if (props.height) {
      return `height: ${props.height};`;
    }

    if (props.maxWidth) {
      return `max-width: ${props.maxWidth};`;
    }
    if (props.maxHeight) {
      return `max-height: ${props.maxHeight};`;
    }
    if (props.minWidth) {
      return `min-width: ${props.minWidth};`;
    }
    if (props.minHeight) {
      return `min-height: ${props.minHeight};`;
    }
  }}

`;

export default Base;
