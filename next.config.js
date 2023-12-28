/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
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
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [options.defaultLoaders.babel],
    });

    return config;
  },
});
