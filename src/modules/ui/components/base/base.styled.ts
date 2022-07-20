import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';

export type StyledBaseProps = {
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
};

const Base = withProps<StyledBaseProps>()(styled.span)`
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
`;

export default Base;
