import Head from "next/head";
import { NextSeo } from "next-seo";

function SeoCard({ details }) {
  return (
    <>
      <Head>
        {details.title && <title>{details.title}</title>}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {details.keywords && (
          <meta name="keywords" content={details.keywords} />
        )}
        <meta
          name="description"
          content={
            details.description
              ? details.description
              : "Blockchain and Software Development Company., Blockchain,Web3,Software Development,Website development,DeFi,Crypto,Bitcoin,Ethereum"
          }
        />
      </Head>
      <NextSeo
        openGraph={{
          type: details.ogType,
          url: `url`,
          title: details.title,
          description: details.description
            ? details.description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          images: [
            {
              url: details.ogImage
                ? details.ogImage
                : "%PUBLIC_URL%/metaImage.webp",
            },
          ],
        }}
        twitter={{
          handle: "@solit",
          site: "Solit",
          cardType: "summary_large_image",
        }}
      />
      <meta charSet="utf-8" />
    </>
  );
}

export default SeoCard;
