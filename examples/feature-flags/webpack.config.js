const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FeatureFlagsWebpackPlugin = require('./.config/webpack-feature-flags-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.ts',

  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },

  devServer: {
    contentBase: resolve(__dirname, 'build'),
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),

    new FeatureFlagsWebpackPlugin(),

    // new FeaturePlugin(
    //   [BUTTON_NEW_LAYOUT, { enabled: true }],
    // ),
  ],
}
