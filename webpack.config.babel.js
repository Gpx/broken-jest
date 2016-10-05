import { join } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'

const include = join(__dirname, 'src')

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-addons-css-transition-group': 'react-addons-css-transition-group',
    'react-intl': 'react-intl',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', include },
      { test: /\.p?css/, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss') },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
    ],
  },
  postcss: function () {
    return [
      require('postcss-import')({
        path: ['client', 'node_modules'],
        addDependencyTo: webpack,
      }),
      require('precss'),
      require('postcss-cssnext')({
        features: {
          rem: {
            rootValue: '62.5%',
            html: false,
          }
        },
      }),
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.pcss', '.css'],
    modulesDirectories: ['client', 'node_modules'],
  },
}
