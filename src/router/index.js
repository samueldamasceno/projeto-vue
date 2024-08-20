import { createRouter, createWebHistory } from "vue-router";

import PaginaPrincipal from "@/views/PaginaPrincipal.vue";
import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import ExplorePage from "@/views/ExplorePage.vue";
import UserPage from "@/views/UserPage.vue";

import PaginaCriacao from "@/views/PaginaCriacao.vue";

const routes = [
    {
        path: "/",
        name: "Principal",
        component: PaginaPrincipal,
        children: [
            {
                path: "",
                name: "Home",
                component: HomePage,
                meta: { headerBehavior: 'dinamico' }
            },
            {
                path: "busca",
                name: "Busca",
                component: SearchPage,
                meta: { headerBehavior: 'grande' }
            },
            {
                path: "explorar",
                name: "Explorar",
                component: ExplorePage,
                meta: { headerBehavior: 'pequeno' }
            },
            {
                path: "usuario",
                name: "Usuário",
                component: UserPage,
                meta: { headerBehavior: 'pequeno' }
            }
        ]
    },
    {
        path: "/criar",
        name: "Criar",
        component: PaginaCriacao,
        children: []
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

