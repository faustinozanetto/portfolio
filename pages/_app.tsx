import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';
import { Layout } from '../layouts';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
