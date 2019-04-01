/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');
const BUILD_PATH = path.resolve(__dirname, '../build');
const cleanOptions = {
  root: ROOT_PATH,
  verbose: true,
};

module.exports = {
  entry: {
    index: ['@babel/polyfill', path.resolve(ROOT_PATH, './client/index.js')],
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(ROOT_PATH, 'build'),
  },
  resolve: {
    alias: {
      '@Utils': path.resolve(ROOT_PATH, 'utils'),
      '@Pages': path.resolve(ROOT_PATH, './client/pages'),
      '@Config': path.resolve(ROOT_PATH, './client/config'),
    },
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules | build)/,
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules | build)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_PATH, cleanOptions),
    new HtmlWebpackPlugin({
      title: 'web-react-pratice',
      template: path.resolve(ROOT_PATH, 'index.html'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
