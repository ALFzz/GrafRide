// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "GrafRide",
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/Logo.svg' },
      ]
    }
  },
  compatibilityDate: '2025-07-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules:  ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'motion-v/nuxt'],
  fonts: {
    families: [
      {
        name: 'Dela Gothic One',
        provider: 'google',
        weights: [400],
        preload: true,
      },
      {
        name: 'Ruberoid',
        src: '/fonts/Ruberoid-Regular.woff2',
        weights: [400],
        preload: true,
      },
      {
        name: 'Mark Squad',
        src: '/fonts/Mark-Squad.woff2',
        weights: [400],
        preload: false,
      },
      ]
  }
})