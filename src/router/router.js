import {createRouter,createWebHashHistory} from 'vue-router'




//con la importacion de esas paginas, hago la definicion de rutas
const routes=[
    {
        path:"/",
        component:()=>import('../modules/pokemon/pages/BienvenidaPage.vue')
    },
    {
        path: "/jessi",
        component:()=>import('../modules/pokemon/pages/JessiPage.vue')
    },
    {
        path:"/premios",
        component:()=>import('../modules/pokemon/pages/PremiosPage.vue')
    },
    {
        path: "/juego",
        component:()=>import('../modules/pokemon/pages/JuegoPage')
    },
    {
        path:"/poke",
        component:()=>import('../modules/pokemon/pages/PokermonPage.vue')
    },
    {
        path:"/:pathMatch(.*)*",
        component:()=>import('../modules/pokemon/pages/NotFound.vue')
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes,

})


export default router