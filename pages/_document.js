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
          <meta
            property="twitter:title"
            content="Solit"
          />
          <meta
            property="twitter:description"
            content="Lorem Ipsum twit"
          />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"
          />
          <meta
            property="twitter:image"
            content="https://media.licdn.com/dms/image/C4E0BAQGVf93zisQLPw/company-logo_200_200/0/1662644823778?e=1680739200&v=beta&t=qMeWu5YYl0DJEPm-WUTCHTz4MrXIjo7Kc8jIVytrFKA"
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
