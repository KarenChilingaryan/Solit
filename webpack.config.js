// webpack.config.js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "async",
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
};
