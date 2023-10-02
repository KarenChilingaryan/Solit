import { memo } from "react";
import Head from "next/head";
import { NextSeo } from 'next-seo';

function SeoCard({ details }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Solit" />
        <title>Solit</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Basic Meta Tags --> */}
        {details.pageDescription != 'default_meta_description' && <meta name="description" content={details.pageDescription} />}
        {details.pageKeyWords != 'default_meta_keywords' && <meta name="keywords" content={details.pageKeyWords} />}
        <meta name="author" content="Your Name" />

        {/* <!-- Open Graph / Facebook (also used by LinkedIn) --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={details.pageUrl} />
        {details.title != 'default_meta_title' && <meta property="og:title" content={details.title} />}
        {details.pageDescription != 'default_meta_description' && <meta property="og:description" content={details.pageDescription} />}
        <meta property="og:image" content={"https://djnago-solit-static.s3.eu-north-1.amazonaws.com/media/images/converted_image_ZuJcRnF.png"} />
        {/* <meta property="og:image" content={details.pageImage} /> */}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={details.pageUrl} />
        {details.title != 'default_meta_title' && <meta property="twitter:title" content={details.title} />}
        {details.pageDescription != 'default_meta_description' && <meta property="twitter:description" content={details.pageDescription} />}
        <meta property="twitter:image" content={"https://djnago-solit-static.s3.eu-north-1.amazonaws.com/media/images/converted_image_ZuJcRnF.png"} />
      </Head>
      <NextSeo
        openGraph={{
          type: 'website',
          url: details.pageUrl,
          ...(details.title != 'default_meta_title' ? { description: details.title } : {}),
          ...(details.pageDescription != 'default_meta_description' ? { description: details.pageDescription } : {}),
          images: [
            {
              url: "https://djnago-solit-static.s3.eu-north-1.amazonaws.com/media/images/converted_image_ZuJcRnF.png"
              // url: details.pageImage
            },
          ],
        }}
      // twitter={{
      //   //twitterName
      //   handle: '@twitterName',
      //   site: 'Solit',
      //   cardType: 'summary_large_image',
      // }}
      />
      <meta charSet="utf-8" />
    </>
  );
}

export default memo(SeoCard);
