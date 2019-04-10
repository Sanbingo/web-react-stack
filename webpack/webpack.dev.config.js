const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  watch: true,
  watchOptions: { // 不监听目录
    ignored: [/node_modules/, '/build/'],
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'build'),
  //   port: 9000,
  //   hot: true,
  //   historyApiFallback: true,
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
