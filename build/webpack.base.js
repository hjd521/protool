const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let webpackConfig = {
  entry: path.resolve(__dirname, '../main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'tool.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        },
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'demo',
      template:  './index.html'
  }),
    new VueLoaderPlugin()
  ]
}
module.exports = webpackConfig