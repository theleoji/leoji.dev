const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

module.exports = withSass(
  withCss(
    withOptimizedImages({
      serverRuntimeConfig: {
        domain: 'https://leoji.codes'
      },
      exportTrailingSlash: true
    })
  )
)
