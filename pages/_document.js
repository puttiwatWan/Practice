import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css" />
          {/* <link rel="stylesheet" type="text/css" charSet="UTF-8" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> */}
          {/* <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
          <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.1.0/css/all.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}