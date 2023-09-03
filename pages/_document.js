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
          <meta property="og:description" content="Lorem Ipsum SOLIT" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="Solit Website Url" />
          <meta property="twitter:title" content="Solit" />
          <meta property="twitter:description" content="Lorem Ipsum twit" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"
          />
          <meta
            property="twitter:image"
            content="https://simpl.info/webp/cherry.webp"
          />
          <script src="https://www.google.com/recaptcha/enterprise.js?render=6Leij-8nAAAAAE-wq9JJ7Nh78mLizd49SQz64FZb"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
