const withPlugins = require('next-compose-plugins')
const Sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [
    Sass,
    {
      serverRuntimeConfig: {
        domain: 'https://leoji.dev'
      }
    }
  ],
  [css],
  [optimizedImages]
])
