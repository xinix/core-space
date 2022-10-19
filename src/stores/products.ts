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
                'utility',
                'first-born',
                'fury',
                'line-of-fire',
                'rysa',
                'trading-post-5',
            ] as ProductType[],
    },
    actions: {
        save() {
            window.localStorage.setItem('my-collection', this.active.join(';'))
        },
    },
})
