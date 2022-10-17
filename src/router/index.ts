import { createRouter, createWebHistory } from 'vue-router'

const TokensPage = () => import('@/pages/TokensPage.vue')
const TokenPage = () => import('@/pages/TokenPage.vue')
const SettingsPage = () => import('@/pages/SettingsPage.vue')

const routes = [
    { path: '/', component: TokensPage },
    { path: '/item/:slug', component: TokenPage, props: true },
    { path: '/settings', component: SettingsPage },
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
                el.scrollTop = 0
            }, 200)
        }
    })
    return router
}

export { setupRouter }
