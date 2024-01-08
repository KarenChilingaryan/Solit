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
          {/* <title>Solit</title> */}
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="Solit" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
