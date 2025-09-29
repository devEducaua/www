import { defineConfig } from 'astro/config';

export default defineConfig({
    site: "https://deveducaua.github.io/www",
    outDir: "docs",
    base: "/www",

    build: {
        pageUrlFormat: "directory",
        trailingSlash: "always"
    },

    devToolbar: {
        enabled: false
    },

    markdown: {
        syntaxHighlighting: false
    }
});
