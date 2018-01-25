'use strict';

const path              = require('path');
const webpack           = require('webpack');
const BabiliPlugin      = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module : {
    rules: [
      {
        test: /\.css$/,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options: {
              modules       : true,
              importLoaders : 1,
              localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  // module: { // TODO: undo
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use : ExtractTextPlugin.extract({
  //         fallback: 'style-loader',
  //         use     : [
  //           {
  //             loader : 'css-loader',
  //             options: {
  //               modules       : true,
  //               importLoaders : 1,
  //               localIdentName: '[hash:base64:5]'
  //             }
  //           },
  //           'postcss-loader'
  //         ]
  //       })
  //     }
  //   ]
  // },
  plugins: [
    new BabiliPlugin(),
    // new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
