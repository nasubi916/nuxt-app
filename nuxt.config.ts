// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr:false,
    app:{
        head:{
            viewport: 'width=360, initial-scale=1', 
            title:"Nusubi",
            meta: [
                { charset:"utf-8"},
                { name:"author",content:"nasubi"},
                { name:"viewport", content:"width=device-width,initial-scale=1"},
                { name:"description",content:"This site is designed for personal study of Nuxt3"},
            ],
            link:[
                {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"},
                {rel:"icon",href:"favicon.ico"},
            ]
        }
    }
})
//composable内にネストしたフォルダは自動インポートされないのでスキャン対象として指定する必要がある