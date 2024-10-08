// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootTag : 'body',
    rootAttrs : {

    },
    head : {
      bodyAttrs : {
        class : 'd-flex justify-content-center align-items-center vh-100'
      }
    }
  },
  css : [
      'bootstrap/dist/css/bootstrap.min.css',
      'assets/css/main.css',
      'remixicon/fonts/remixicon.css',
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client', mode: 'client' },
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
