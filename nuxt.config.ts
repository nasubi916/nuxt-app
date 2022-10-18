// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr:false,
    app:{
        head:{
            title:"Nusubi",
            meta: [
                { charset:"utf-8"},
                { name:"viewport", content:"width=device-width,initial-scale=1"}
            ],
            link:[
                {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}
            ]
        }
    }
})
