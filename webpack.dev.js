const merge = require('webpack-merge').strategy({ entry: 'prepend' }),
      common = require('./webpack/common.js'),
      dev = require('./webpack/dev.js'),
      post = require('./webpack/post.js'),
      src = 'src'
      dist = 'dist'

module.exports = merge(
  common({dirname: __dirname, dist}),
  dev({dirname: __dirname, dist}),
  post({src, dist})
)
