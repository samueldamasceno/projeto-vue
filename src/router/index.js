import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import ExplorePage from "@/views/ExplorePage.vue";
import UserPage from "@/views/UserPage.vue";

const routes = [
    {
        path: "/",
        name: "Página Inicial",
        component: HomePage,
        children: [
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

