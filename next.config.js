/** @type {import('next').NextConfig} */
const nextConfig = {
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
    domains: ['djnago-solit-static.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
