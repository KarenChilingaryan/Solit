/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
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
  // Add the PostCSS configuration with PurgeCSS
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options,
        },
      ],
    })
 
    return config
  },
});
