'use strict';

const webpack      = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // TODO: undo extract-text-webpac-plugin
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options: {
              modules       : true,
              importLoaders : 1,
              localIdentName: '[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
