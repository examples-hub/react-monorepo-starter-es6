const path = require('path');
const webpackMerge = require('webpack-merge');
const devServerConfig = require('../../../webpack/webpack.config.server');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackMergedConfig = null;

webpackMergedConfig = webpackMerge.merge(devServerConfig, {
  entry: path.resolve(__dirname, '../src/render.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  // plugins: [
  //   // new HtmlWebpackPlugin({
  //   //   template: path.relative(process.cwd(), 'public/demo.html'),
  //   //   // template: './public/demo.html',
  //   //   filename: 'index.html',
  //   // }),
  // ],
  // devServer: {
  //   // contentBase: path.resolve(__dirname, '../dist'),
  // },
});

module.exports = webpackMergedConfig;
