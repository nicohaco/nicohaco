'use strict';

const path                     = require('path');
const webpack                  = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  bail  : true,
  entry : path.join(__dirname, 'src/main/main.js'),
  target: 'electron-main',
  output: {
    path         : path.join(__dirname, 'dist'),
    filename     : 'main.js',
    publicPath   : '/dist/',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules         : ['node_modules'],
    extensions      : ['.js'],
    descriptionFiles: ['package.json']
  },
  externals: {
    '7zip': '7zip'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CaseSensitivePathsPlugin()
  ],
  node: {
    __dirname : false,
    __filename: false
  }
};
