import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';
import { Layout } from '../layouts';
import { SEO } from '../components/seo';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <CSSReset />
        <SEO />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
