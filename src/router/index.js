import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/public/Home.vue'
import Shop from '../views/public/Shop.vue'

import NotFound from '../views/public/NotFound.vue'

import PublicLayout from '../views/public/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'public',
        component: PublicLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/shop', name: 'shop', component: Shop }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;