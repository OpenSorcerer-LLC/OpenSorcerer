const path = require('path');
const webpack = require('webpack')


module.exports = {
  entry: './src/app.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    proxy: {
      '/': 'http://localhost:3000/',
    }
  }
}