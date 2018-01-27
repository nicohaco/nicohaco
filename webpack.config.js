'use strict';

const path                     = require('path');
const merge                    = require('webpack-merge');
const webpack                  = require('webpack');
const HtmlWebpackPlugin        = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

const common = {
  bail  : true,
  target: 'electron-renderer',
  entry: {
    core: path.join(__dirname, 'src', 'renderer', 'index.js'),
    sub: path.join(__dirname, 'src', 'renderer', 'SubWindow')
  },
  output: {
    path    : path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules         : ['node_modules'],
    extensions      : ['.js', '.css'],
    descriptionFiles: ['package.json']
  },
  module: {
    rules: [
      {
        test   : /\.js$/,
        use    : 'babel-loader',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        use : 'file-loader?limit=10000&name=[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['core'],
      filename: 'core.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['sub'],
      filename: 'sub.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VERSION' : JSON.stringify(require('./package.json').version)
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = merge.smart(common, config);
