// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  assetPrefix: isProd ? '/pokedex/' : '',
  distDir: 'docs',
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  future: {
    webpack5: true
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
})
