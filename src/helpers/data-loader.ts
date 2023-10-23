import { ProductType } from '@/tokens/types'

export function loadDataJson(product: ProductType) {
    return {
        'black-star': () => import('@/assets/data/black-star.json'),
        'core-space': () => import('@/assets/data/core-space.json'),
        'cygnus': () => import('@/assets/data/cygnus.json'),
        'first-born': () => import('@/assets/data/first-born.json'),
        'fury': () => import('@/assets/data/fury.json'),
        'galactic-corps': () => import('@/assets/data/galactic-corps.json'),
        'line-of-fire': () => import('@/assets/data/line-of-fire.json'),
        'poseidon': () => import('@/assets/data/poseidon.json'),
        'purge-outbreak': () => import('@/assets/data/purge-outbreak.json'),
        'rogue': () => import('@/assets/data/rogue.json'),
        'rysa': () => import('@/assets/data/rysa.json'),
        'shift-change': () => import('@/assets/data/shift-change.json'),
        'skylark': () => import('@/assets/data/skylark.json'),
        'trading-post-5': () => import('@/assets/data/trading-post-5.json'),
        'utility': () => import('@/assets/data/utility.json'),
        'wanted': () => import('@/assets/data/wanted.json'),
        'yamato': () => import('@/assets/data/yamato.json'),
        'zed': () => import('@/assets/data/zed.json'),
    }
        [product]()
        .then((module) => module.default)
}
