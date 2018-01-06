const path = require('path'),
      webpack = require('webpack')

module.exports = ({dirname, dist}) => ({
  entry: {
    app: [ 'react-hot-loader/patch' ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(dirname, dist),
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
