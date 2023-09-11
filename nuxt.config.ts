// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'
    ],
    modules: [
        '@nuxtjs/supabase'
    ],
    ssr: true,
    app:{
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ]
        }
    }

})
