import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const lightTheme = {
  background: '#fafafa',
  color: '#333',
};

export const darkTheme = {
  background: '#333',
  color: '#fafafa',
};

export default GlobalStyles;
