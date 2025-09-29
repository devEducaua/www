// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    //site: "https://deveducaua.github.io/www",
    outDir: "docs",
    base: "/www",

    build: {
        pageUrlFormat: "directory",
        trailingSlash: "always"
    },

    devToolbar: {
        enabled: false
    }
});
