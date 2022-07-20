import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        [key: string]: string;
      };
      background: {
        [key: string]: string;
      };
      text: string;
    };
    fontFamily: {
      body: string;
    };
    spacing: {
      [key: string]: string;
    };
    borderRadius: {
      [key: string]: string;
    };
    fontSize: {
      [key: string]: string;
    };
    fontWeight: {
      [key: string]: number;
    };
    breakPoints: {
      [key: string]: string;
    };
    transitions: {
      [key: string]: string;
    };
  }
}
