import { createRouter, createWebHistory } from 'vue-router'

const TokensPage = () => import('@/pages/TokensPage.vue')

const routes = [
    {
        path: '/',
        component: TokensPage,
        props: (route: any) => ({ q: route.query.q }),
    },
    { path: '/item/:slug', component: TokensPage, props: true },
]

function setupRouter() {
    return createRouter({
        history: createWebHistory('/core-space/'),
        routes,
    })
}

export { setupRouter }
