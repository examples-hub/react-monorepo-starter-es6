const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  context: process.cwd(),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // libraryTarget: 'umd',
    // publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.js$/,
      //   use: 'source-map-loader',
      //   enforce: 'pre',
      // },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(),
  ],
};
