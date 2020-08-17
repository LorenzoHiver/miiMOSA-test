import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apolloConfig';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import './_app.css';


const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
          key="google-font-ubuntu"
        />
      </Head>
      <I18nextProvider i18n={i18n}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
        </I18nextProvider>
    </>
  )
}

export default _App;
