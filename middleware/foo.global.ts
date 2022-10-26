export default defineNuxtRouteMiddleware((to,from)=>{//!.globalをつけることで全体にこの処理を追加できる
    console.log('middleware');
})