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
          <meta charSet="utf-8" />
          <meta name="title" content="Fundex" />
          <meta
            name="description"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <meta name="robots" content="index,follow" />
          <meta property="og:title" content="Solit" />
          <meta property="og:url" content="Link!!!" />
          <meta property="og:description" content="Content!!!" />
          <meta name="image" property="og:image" content="Website Link" />
          <meta name="twitter:title" content="Solit" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:card" content="Solit" />
          <meta property="twitter:domain" content="Domian!!!!!" />
          <meta property="twitter:url" content="Solit URL!!!!!" />
          <meta property="twitter:description" content="Content!!!!" />
          <meta property="twitter:image" content="Link for image!!!!" />
          <script
            src='//fw-cdn.com/2408772/3004044.js'
            chat='true'>
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
