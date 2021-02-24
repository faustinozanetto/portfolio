import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
