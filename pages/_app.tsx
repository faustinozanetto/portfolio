import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';
import { Layout } from '../layouts';
import { SEO } from '../components/seo';
import Head from 'next/head';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        </Head>
        <CSSReset />
        <SEO />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
