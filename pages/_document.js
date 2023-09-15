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
          <title>Solit</title>
          <meta name="description" content="Software Development Company – Solit. Solit is your trusted and top-ranked software company with all the needed resources for custom IT development." />
          <meta property="og:title" content="SolIT" />
          <meta property="og:description" content="Software Development Company – Solit. Solit is your trusted and top-ranked software company with all the needed resources for custom IT development." />
          <meta property="og:image" content="https://djnago-solit-static.s3.eu-north-1.amazonaws.com/media/images/converted_image_ZuJcRnF.png" />
          <meta property="og:url" content="https://solit-llc.com/" />
          <meta property="og:type" content="website" />
          <meta property="twitter:card" content="https://djnago-solit-static.s3.eu-north-1.amazonaws.com/media/images/converted_image_ZuJcRnF.png" />
          <meta property="twitter:url" content="https://solit-llc.com/" />
          <meta property="twitter:title" content="Solit" />
          <meta property="twitter:description" content="Software Development Company – Solit. Solit is your trusted and top-ranked software company with all the needed resources for custom IT development." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
