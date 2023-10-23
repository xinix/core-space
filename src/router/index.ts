import { createRouter, createWebHistory } from 'vue-router'

const TokensPage = () => import('@/pages/TokensPage.vue')
const TokenPage = () => import('@/pages/TokenPage.vue')
const SettingsPage = () => import('@/pages/SettingsPage.vue')
const TradingPosts = () => import('@/pages/TradingPostsPage.vue')
const TradingPost = () => import('@/pages/TradingPostPage.vue')

const routes = [
    {
        path: '/',
        name: 'tokens',
        component: TokensPage,
        meta: { search: true },
    },
    {
        path: '/item/:slug',
        component: TokenPage,
        name: 'token',
        props: true,
        meta: { search: true, back: true },
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsPage,
        meta: { back: true },
    },
    {
        path: '/trading-posts',
        name: 'trading-posts',
        component: TradingPosts,
        meta: { back: true },
    },
    {
        path: '/trading-post/:slug',
        component: TradingPost,
        name: 'trading-post',
        props: true,
        meta: { back: true },
    },
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
