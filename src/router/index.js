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
                component: HomePage
            },
            {
                path: "busca",
                name: "Busca",
                component: SearchPage
            },
            {
                path: "explorar",
                name: "Explorar",
                component: ExplorePage
            },
            {
                path: "usuario",
                name: "Usuário",
                component: UserPage
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

