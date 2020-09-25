export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Warframe Hub ( alpha-nuxt)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vselect.js', ssr: false },
    { src: '~/plugins/nuxt-client-init.js', ssr: false },
    { src: '~/plugins/langflags.js', ssr: false },
    { src: '~/plugins/accordion.js', ssr: false },
    { src: '~/plugins/collapse.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  purgeCSS: {
    whitelistPatterns: [
      /(^|\.)fa-/,
      /-fa($|\.)/,
      /^vueperslide/,
      /^badger/,
      /^vs/,
      /^flag/,
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^nuxt-link(|-exact)-active$/,
    ],
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'vue-warehouse/nuxt',
      {
        vuex: true,
        plugins: ['store/plugins/expire', 'store/plugins/defaults'],
        storages: [
          'store/storages/localStorage',
          'store/storages/cookieStorage',
        ],
      },
    ],
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faDesktop',
              'faSun',
              'faMoon',
              'faBars',
              'faGamepad',
              'faSnowflake',
              'faPalette',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faXbox', 'faPlaystation'],
          },
        ],
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
