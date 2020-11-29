// webpack config for dev demo using webpack-dev-server

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  // entry: path.resolve(__dirname, '../src/render.js'),
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, '../dist'),
  // },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.relative(process.cwd(), 'public/index.html'),
      // template: './public/demo.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', 'jsx'],
    alias: {
      // crypto: 'crypto-browserify',
      // vm: 'vm-browserify',
      // stream: 'stream-browserify',
    },
  },
  node: {
    // process: 'mock',
    // process: true,
  },
  // 解决热加载的问题 https://github.com/webpack/webpack-dev-server/issues/2758
  target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web',

  // devServer config flags are only read by WDS but not Webpack
  // 若要使用热加载，还需要在cli上传入 --hot
  devServer: {
    // contentBase: path.resolve(__dirname, '../dist'),
    host: '0.0.0.0',
    port: 8999,
    // open: true,
    compress: true,
    inline: true,
    hot: true,
    historyApiFallback: true,
    // clientLogLevel: 'silent',
    clientLogLevel: 'debug',
  },
};
