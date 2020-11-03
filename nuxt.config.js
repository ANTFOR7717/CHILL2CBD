export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'eccomerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/main.scss',
    '~assets/css/main.css'

  ],
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [ '@nuxtjs/snipcart',
  ],
  snipcart: {
    // Options available
 // version: /* not required default value is v3.0.23 */
    key: 'ZTEyMWFlZGUtNjUzZi00MmYwLTk4ODktY2FjYjAwYWZhYjZhNjM3Mjg3MzA3MTQ3MTE5MTMz' /* required https://app.snipcart.com/dashboard/account/credentials */,
    addProductBehavior: 'true'/* not required default true */,
    locales: {} /* not required */,
    snipcartCustomize: '' /* not required should be absolute path */
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
