const path = require('path');
const webpack = require('webpack');
const {
  svgOptions: svgOptimizationOptions,
} = require('@shopify/images/optimize');
const postcssShopify = require('postcss-shopify');

const ICON_PATH_REGEX = /icons\//;
const IMAGE_PATH_REGEX = /\.(jpe?g|png|gif|svg)$/;

module.exports = {
  target: 'web',
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    '@shopify/polaris/styles/global.scss',
    path.join(__dirname, 'index.tsx'),
  ],
  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    libraryTarget: 'var',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@shopify/polaris': path.resolve(__dirname, '..', 'src'),
    },
  },
  module: {
    rules: [
      {
        test(resource) {
          return ICON_PATH_REGEX.test(resource) && resource.endsWith('.svg');
        },
        use: [
          {
            loader: '@shopify/images/icon-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              svgo: svgOptimizationOptions(),
            },
          },
        ],
      },
      {
        test(resource) {
          return (
            IMAGE_PATH_REGEX.test(resource) && !ICON_PATH_REGEX.test(resource)
          );
        },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              silent: true,
              useBabel: true,
              useCache: true,
              useTranspileModule: true,
              transpileOnly: true,
              cacheDirectory: path.resolve(__dirname, '.cache', 'typescript'),
              babelOptions: {
                babelrc: false,
                presets: [
                  ['babel-preset-shopify/web', {modules: false}],
                  ['babel-preset-shopify/react', {hot: false}],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              sourceMap: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => postcssShopify(),
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              includePaths: [path.resolve(__dirname, '..', 'src', 'styles')],
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(
                  __dirname,
                  '..',
                  '..',
                  'src',
                  'styles',
                  'foundation.scss',
                ),
                path.resolve(
                  __dirname,
                  '..',
                  '..',
                  'src',
                  'styles',
                  'shared.scss',
                ),
              ],
            },
          },
        ],
      },
    ],
  },
};
