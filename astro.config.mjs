// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://deveducaua.github.io",

    build: {
        pageUrlFormat: "directory",
        trailingSlash: "always"
    },

    devToolbar: {
        enabled: false
    }
});
