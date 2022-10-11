import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/TokensPage.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomePage,
        props: (route) => ({ q: route.query.q }),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
