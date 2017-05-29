'use strict';

const path         = require('path');
const webpack      = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

require('babel-polyfill'); // for padStart

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'renderer', 'index.js')
  ],
  plugins: [
    new BabiliPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
