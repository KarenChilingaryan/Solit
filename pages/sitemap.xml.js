// // import { SitemapStream, streamToPromise } from 'sitemap';

// // export default async (req, res) => {
// //   try {
// //     const smStream = new SitemapStream({ hostname: 'https://solit-yvg3.vercel.app/' });

// //     // Add URLs to the sitemap
// //     smStream.write({ url: '/page1', changefreq: 'daily', priority: 0.7 });
// //     smStream.write({ url: '/page2', changefreq: 'weekly', priority: 0.5 });
// //     // Add more URLs as needed

// //     // End the stream and finalize the sitemap
// //     smStream.end();

// //     // Generate a readable stream from the sitemap stream
// //     const sitemap = await streamToPromise(smStream);

// //     // Set the appropriate headers
// //     res.setHeader('Content-Type', 'text/xml');
// //     res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

// //     // Send the sitemap XML to the response
// //     res.write(sitemap.toString());

// //     // End the response
// //     res.end();
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).end();
// //   }
// // };

// // Disabling server-side rendering for this page
// export const getServerSideProps = async ({ res }) => {
//     res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
//     res.statusCode = 200;
//     res.end();

//     return { props: {} };
// };
// const { SitemapStream, streamToPromise } = require('sitemap')
// const { Readable } = require('stream')

// // An array with your links
// const links = [{ url: '/page-1/', changefreq: 'daily', priority: 0.3 }]

// // Create a stream to write to
// const stream = new SitemapStream({ hostname: 'https://solit-yvg3.vercel.app/' });

// // Return a promise that resolves with your XML string
// return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
//     data.toString()
// )