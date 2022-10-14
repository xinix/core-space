import { createRouter, createWebHistory } from 'vue-router'

const TokensPage = () => import('@/pages/TokensPage.vue')
const TokenPage = () => import('@/pages/TokenPage.vue')

const routes = [
    {
        path: '/',
        component: TokensPage,
        props: (route: any) => ({ q: route.query.q }),
    },
    { path: '/item/:slug', component: TokenPage, props: true },
]

function setupRouter() {
    return createRouter({
        history: createWebHistory('/core-space/'),
        routes,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        scrollBehavior(_to, _from, _savedPosition) {
            // always scroll to top
            return { top: 0 }
        },
    })
}

export { setupRouter }
