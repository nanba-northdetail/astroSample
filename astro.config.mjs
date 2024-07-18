import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://www.northdetail.co.jp/",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/styles/global/" as *;'
        }
      }
    }
  },
  integrations: [preact()]
});