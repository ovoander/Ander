// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@nuxtjs/google-fonts",
    ],
    colorMode: {
        classSuffix: "",
    },
    googleFonts: {
        families: {
            "Nunito Sans": true,
        },
        preload: true,
        useStylesheet: true,
    },
});
