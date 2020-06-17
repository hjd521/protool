const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');
const base = require('./webpack.base');
let webpackConfig = merge({
  mode: 'production',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'tool.js',
    library: 'vue-work-p',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  externals: {
    vue: 'Vue'
  }
})
module.exports = webpackConfig