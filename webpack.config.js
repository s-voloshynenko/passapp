'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssLoader = 'style-loader!css-loader!postcss-loader?browsers=last 2 versions';

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: cssLoader
    }, {
      test: /\.sass$/,
      loader: cssLoader + '!sass-loader?indentedSyntax=sass'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }, {
      test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};
