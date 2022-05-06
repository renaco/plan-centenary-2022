import * as React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document( title = 'Plan Centenario 2022 | Federación Peruana de Fútbol') {
  return (
    <Html>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href='https://fonts.googleapis.com/css?family=Oswald|Roboto:300,400,500,700' rel='stylesheet' />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');`}} />
      </Head>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}