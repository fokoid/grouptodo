const merge = require('webpack-merge')
      common = require('./webpack/common.js'),
      prod = require('./webpack/prod.js'),
      post = require('./webpack/post.js'),
      src = 'src',
      dist = 'dist'

module.exports = merge(
  common({dirname: __dirname, dist}),
  prod(),
  post({src, dist})
)
