'use strict';

const path                    = require('path');
const webpack                 = require('webpack');
const Dashboard               = require('webpack-dashboard');
const DashboardPlugin         = require('webpack-dashboard/plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const dashboard = new Dashboard();

require('dotenv').config();

module.exports = {
  cache: true,
  entry: [
    // 'react-hot-loader/patch',
    'babel-polyfill',
    path.join(__dirname, 'src', 'renderer', 'index.js')
  ],
  output: {
    publicPath: '/dist/'
  },
  devtool: 'cheap-module-eval-source-map',
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
