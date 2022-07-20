import withProps from '@utils/theming/theming-utils';
import styled from 'styled-components';
import type { StyledTypographyProps } from '../base/typography.styled';
import Typography from '../base/typography.styled';

const StyledHeading = withProps<StyledTypographyProps>()(styled(Typography))`
`;

export default StyledHeading;
