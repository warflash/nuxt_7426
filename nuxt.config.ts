import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
    i18n: {
        langDir: "locales/",
        locales: [
          {
            iso: "en-US",
            code: "en",
            file: "en.json",
          },
        ],
        lazy: true,
        defaultLocale: "en",
        vueI18n: {
          legacy: false,
          fallbackLocale: "en",
          locale: "en",
        },
    },
})
