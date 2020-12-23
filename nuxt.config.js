export default {
  // buildDir: 'dist',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hemp Derived Best CBD Products for Anxiety - THC-Free | Chill2CBD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover THC-free, superior CBD products. ' +
          'Featuring award-winning, high-quality hemp oil. Feel & taste the difference. Eliminate anxiety with ' +
          'curated CBD products for the THC sensitive. View a selection of edibles, tinctures, concentrates, flowers,' +
          'vaporizers, and options for pets. Chill2CBD has the Best CBD Products for Anxiety. \n' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap'
      }

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
    version: 'v3.0.26', /* not required default value is v3.0.23 */
    key: 'ZTEyMWFlZGUtNjUzZi00MmYwLTk4ODktY2FjYjAwYWZhYjZhNjM3Mjg3MzA3MTQ3MTE5MTMz' /* required https://app.snipcart.com/dashboard/account/credentials */,
    addProductBehavior: false /* not required default true */,
    locales: {} /* not required */,
    snipcartCustomize: '' /* not required should be absolute path */
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // '@nuxtjs/apollo',
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    //'@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    //'@nuxt/content',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.datocms.com',
        getAuth: () => 'Bearer 32f3dfe410276118faa42255f69299'
      },
    }
  },

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
