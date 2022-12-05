import styled from 'styled-components';

export type IStyledResponsiveProps = {
  responsiveStyles?: {
    media: string;
    styles: IStyledBaseProps;
  }[];
};

export type IStyledBaseProps = {
  customization?: React.CSSProperties;
};
/*
{
  // Color styles
  color?: string;
  backgroundColor?: string;
  // Spacing styles
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
  borderRadius?: string;
  boxShadow?: string;
  // Display styles
  display?: string;
  // Flex styles
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  // Typography styles
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  fontFamily?: string;
  lineHeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};
*/

export const injectBaseStyles = (props: IStyledBaseProps) => {
  let styles = '';
  if (props.customization) {
    Array.from(Object.entries(props.customization)).forEach((entry) => {
      styles += `${entry[0]}: ${entry[1]}; `;
    });
  }
  console.log({ styles });

  /*
  if (props.color)
    if (props.padding) {
      styles += `padding: ${props.padding};`;
    }

  if (props.paddingTop) {
    styles += `padding-top: ${props.paddingTop};`;
  }

  if (props.paddingBottom) {
    styles += `padding-bottom: ${props.paddingBottom};`;
  }

  if (props.paddingLeft) {
    styles += `padding-left: ${props.paddingLeft};`;
  }

  if (props.paddingRight) {
    styles += `padding-right: ${props.paddingRight};`;
  }

  if (props.margin) {
    styles += `margin: ${props.margin};`;
  }

  if (props.marginTop) {
    styles += `margin-top: ${props.marginTop};`;
  }

  if (props.marginBottom) {
    styles += `margin-bottom: ${props.marginBottom};`;
  }

  if (props.marginLeft) {
    styles += `margin-left: ${props.marginLeft};`;
  }

  if (props.marginRight) {
    styles += `margin-right: ${props.marginRight};`;
  }

  if (props.width) {
    styles += `width: ${props.width};`;
  }

  if (props.height) {
    styles += `height: ${props.height};`;
  }

  if (props.maxWidth) {
    styles += `max-width: ${props.maxWidth};`;
  }

  if (props.maxHeight) {
    styles += `max-height: ${props.maxHeight};`;
  }

  if (props.minWidth) {
    styles += `min-width: ${props.minWidth};`;
  }

  if (props.minHeight) {
    styles += `min-height: ${props.minHeight};`;
  }

  if (props.color) {
    styles += `color: ${props.color};`;
  }

  if (props.backgroundColor) {
    styles += `background-color: ${props.backgroundColor};`;
  }

  if (props.boxShadow) {
    styles += `box-shadow: ${props.boxShadow};`;
  }
  */
  return styles;
};

const Base = styled.span<IStyledBaseProps>`
  ${(props) => {
    const styles = injectBaseStyles(props);
    return styles;
  }}
`;

export default Base;
