import styled from 'styled-components';
import type { IStyledBaseProps, IStyledResponsiveProps } from '../base/base.styled';
import Base, { injectBaseStyles } from '../base/base.styled';

export type IStyledBoxProps = IStyledBaseProps & IStyledResponsiveProps;

const StyledBox = styled(Base)<IStyledBoxProps>`
  position: relative;
  overflow: hidden;

  ${(props) => {
    let responsiveStyles = '';
    if (props.responsiveStyles) {
      Array.from(props.responsiveStyles).forEach((entry) => {
        const responsiveEntry = `
        @media only screen and (min-width: ${entry.media}) {
          ${injectBaseStyles(entry.styles)}
        }
        `;
        responsiveStyles += responsiveEntry;
      });
    }
    return responsiveStyles;
  }}
`;

export default StyledBox;
