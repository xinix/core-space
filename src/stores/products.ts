import { defineStore } from 'pinia'
import { ProductType } from '@/tokens/types'

export const useProducts = defineStore('products', {
    state: () => {
        const active: ProductType[] = []
        const hist = window.localStorage.getItem('my-collection')
        if (hist != null) {
            const products: ProductType[] = hist.split(';') as ProductType[]
            active.push(...products)
        } else {
            active.push('core-space', 'first-born')
        }
        return { active }
    },
    getters: {
        inCollectionCount: (state) => state.active.length,
        totalCount: () => 6,
        options: () =>
            [
                'core-space',
                'zed',
                'galactic-corps',
                'purge-outbreak',
                'dead-or-alive',
                'cygnus',
                'poseidon',
                'skylark',
                'yamato',
                'utility',
                'first-born',
                'fury',
                'line-of-fire',
                'rysa',
                'trading-post-5',
            ] as ProductType[],
        getBuyNowLink: () => {
            return (p: ProductType) =>
                ({
                    'core-space':
                        'https://battlesystems.co.uk/product/core-space-starter-set/',
                    'zed': 'https://battlesystems.co.uk/product/core-space-shootout-at-zeds-expansion/',
                    'galactic-corps':
                        'https://battlesystems.co.uk/product/core-space-galactic-corps-expansion/',
                    'purge-outbreak':
                        'https://battlesystems.co.uk/product/core-space-purge-outbreak-expansion/',
                    'dead-or-alive':
                        'https://battlesystems.co.uk/product/core-space-wanted-dead-or-alive/',
                    'cygnus':
                        'https://battlesystems.co.uk/product/core-space-cygnus-crew/',
                    'poseidon':
                        'https://battlesystems.co.uk/product/core-space-poseidon-crew/',
                    'skylark':
                        'https://battlesystems.co.uk/product/core-space-skylark-crew/',
                    'yamato':
                        'https://battlesystems.co.uk/product/core-space-yamato-crew/',
                    'first-born':
                        'https://battlesystems.co.uk/product/core-space-first-born-starter-set/',
                    'fury': 'https://battlesystems.co.uk/product/core-space-fury-of-the-insane-god-expansion/',
                    'line-of-fire':
                        'https://battlesystems.co.uk/product/core-space-in-the-line-of-fire-expansion/',
                    'rysa': 'https://battlesystems.co.uk/product/core-space-gates-of-rysa-expansion/',
                    'trading-post-5':
                        'https://battlesystems.co.uk/product/core-space-trading-post-5-expansion/',
                    'utility':
                        'https://battlesystems.co.uk/product/core-space-utility-dashboards/',
                }[p])
        },
    },
    actions: {
        save() {
            window.localStorage.setItem('my-collection', this.active.join(';'))
        },
    },
})
