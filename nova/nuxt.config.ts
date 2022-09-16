import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";
import federation from "@originjs/vite-plugin-federation";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@pinia/nuxt"],
  ssr: false,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: [
    "@/assets/scss/fonts.scss",
    "@/assets/scss/reset.scss",
    "@/assets/scss/globals.scss",
    "@/assets/scss/variables.scss",
  ],
  vite: {
    plugins: [
      svgLoader(),
      federation({
        name: "nova-host",
        remotes: {
          "nova-vue-app": "http://localhost:5001/assets/remoteEntry.js",
          nova_react_app: {
            external: "http://localhost:5002/remoteEntry.js",
            externalType: "url",
            from: "webpack",
            format: "esm",
          },
        },
        shared: ["vue", "pinia"],
      }),
    ],
    server: {
      https: false,
      host: "127.0.0.1",
      port: 3000,
    },
    cacheDir: "node_modules/.cacheDir",
    build: {
      cssCodeSplit: true,
    },
  },
});
