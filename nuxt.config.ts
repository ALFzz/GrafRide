// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "GrafRide",
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
})