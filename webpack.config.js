const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/3box.js',
  output: {
    filename: '3box.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Box',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                'regenerator': true
              }],
              ['@babel/plugin-proposal-object-rest-spread']
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'CACHE_IFRAME_URL',
    ])
  ],
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
