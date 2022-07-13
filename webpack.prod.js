const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

const config = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'initial',
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `${packageName.replace('@', '')}`;
          },
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: { format: { comments: false } },
        parallel: true
      }),
    ],
  },
});

module.exports = config;
