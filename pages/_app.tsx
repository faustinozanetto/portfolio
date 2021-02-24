import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';
import { Layout } from '../layouts';

const App = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
};

export default App;
