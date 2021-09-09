import React from 'react';
import '../public/static/css/main.css';
import type { AppProps } from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
