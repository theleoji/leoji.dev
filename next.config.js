const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

module.exports = withPlugins([withSass, withCss, withOptimizedImages], {
  serverRuntimeConfig: {
    domain: 'https://leoji.codes'
  },
  exportTrailingSlash: true
})
