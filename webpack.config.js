'use strict';

const path                     = require('path');
const merge                    = require('webpack-merge');
const webpack                  = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const config = process.env.NODE_ENV !== 'production' ?
  require('./webpack.dev.config') :
  require('./webpack.prod.config');

const localIdentName = process.env.NODE_ENV !== 'production' ?
  '[path]__[name]__[local]__[hash:base64:5]' :
  '[hash:base64:5]';

const common = {
  bail  : true,
  target: 'electron-renderer',
  output: {
    path      : path.resolve(__dirname, 'dist'),
    filename  : 'bundle.js',
    publicPath: './dist/'
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
        test: /\.css$/,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options: {
              modules      : true,
              importLoaders: 1,
              localIdentName
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        use : 'file-loader?limit=10000&name=[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  performance: { hints: false }
};

module.exports = merge.smart(common, config);
