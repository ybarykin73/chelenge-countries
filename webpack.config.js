const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
    open: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpef|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};