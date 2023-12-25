// webpack.config.js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  optimization: {
    splitChunks: {
      chunks: "async",
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
};
