const merge = require('webpack-merge');
let base = require('./webpack.base')
const path = require('path')
const webpackConfig = merge(base,{
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
})
module.exports = webpackConfig