import readdirp from 'readdirp'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'abedurftig',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png',
        href: '/apple-touch-icon.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/css/main.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/date-filter.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  content: {
    // Options
  },
  generate: {
    routes() {
      return readdirp.promise('./content/articles').then((files) => {
        const routes = []
        files.forEach((file) => {
          routes.push({
            route: file.path.replace('.md', '')
          })
        })
        return routes
      })
    }
    // routes: [
    //   '/2020-07-01-next-post',
    //   '/2020-07-06-third-post',
    //   '/2020-06-06-initial-post'
    // ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
