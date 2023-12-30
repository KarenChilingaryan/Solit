/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
    reactRemoveProperties: true,
  },
  images: {
    domains: ["djnago-solit-static.s3.amazonaws.com"],
  },
};
