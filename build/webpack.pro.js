const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const base = require('./webpack.base');
let webpackConfig = merge(base, {
  mode: 'development',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'tool.js'
  },
  externals: {
    vue: 'Vue'
  }
})
module.exports = webpackConfig