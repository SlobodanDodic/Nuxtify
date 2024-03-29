// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    assets: "/<rootDir>/assets",
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify());
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  routeRules: {
    "/": { ssr: false },
    "/products": { ssr: false },
    "/products/:id": { ssr: false },
    "/about": { ssr: false },
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL,
    },
  },
});
