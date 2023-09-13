import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // eslint-disable-next-line react/jsx-no-useless-fragment
      styles: <> {initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="Solit" />
          <meta property="og:description" content="Software development company SolIT" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="Solit Website Url" />
          <meta property="twitter:title" content="Solit" />
          <meta property="twitter:description" content="Software development company SolIT" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"
          />
          <meta
            property="twitter:image"
            content="https://djnago-solit-static.s3.eu-north-1.amazonaws.com/media/images/converted_image_ZuJcRnF.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
