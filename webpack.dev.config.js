'use strict';

const path                    = require('path');
const webpack                 = require('webpack');
const Dashboard               = require('webpack-dashboard');
const DashboardPlugin         = require('webpack-dashboard/plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const dashboard = new Dashboard();

require('dotenv').config();

module.exports = {
  cache  : true,
  devtool: 'cheap-module-eval-source-map',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.MAIL'    : JSON.stringify(process.env.MAIL),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PASSWORD': JSON.stringify(process.env.PASSWORD)
    }),
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),

    // new FlowStatusWebpackPlugin({
    //   failOnError: true
    // }),
    new webpack.LoaderOptionsPlugin({
      debug   : true,
      minimize: false
    })
  ],
  devServer: {
    hot        : true,
    port       : 8080,
    quiet      : true,
    inline     : true,
    contentBase: '.'
  }
};
