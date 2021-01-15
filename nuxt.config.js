export default {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'keep-notes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/filters.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3000/api/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          maxAge: 60,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 // * 30
        },
        user: {
          property: 'data',
         // autoFetch: true
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post'},
          refresh: { url: 'auth/refresh-token', method: 'post' },
          user: { url: 'auth/me', method: 'get' },
          logout: false
        },
        // autoLogout: false
      }
    }
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'data',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: 'auth/login', method: 'post'},
  //         user: { url: 'auth/me', method: 'get' },
  //         logout: false
  //       },
  //     }
  //   }
  // },
  server :{
    port: 8000
  }
}
