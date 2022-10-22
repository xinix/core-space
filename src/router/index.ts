import { createRouter, createWebHistory } from 'vue-router'

const TokensPage = () => import('@/pages/TokensPage.vue')
const TokenPage = () => import('@/pages/TokenPage.vue')
const SettingsPage = () => import('@/pages/SettingsPage.vue')

const routes = [
    { path: '/', component: TokensPage, meta: { search: true } },
    {
        path: '/item/:slug',
        component: TokenPage,
        props: true,
        meta: { search: true, back: true },
    },
    { path: '/settings', component: SettingsPage, meta: { back: true } },
]

function setupRouter() {
    const router = createRouter({
        history: createWebHistory('/core-space/'),
        routes,
    })
    router.afterEach(() => {
        const el = document.getElementById('app')

        if (el != null) {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }, 200)
        }
    })
    return router
}

export { setupRouter }
