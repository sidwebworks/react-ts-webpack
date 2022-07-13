const path = require('path');
const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    hot: true,
    liveReload: true,
    compress: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
});

module.exports = config;
