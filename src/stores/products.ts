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
            active.push('first-born')
        }
        return { active }
    },
    getters: {
        inCollectionCount: (state) => state.active.length,
        totalCount: () => 6,
    },
    actions: {
        save() {
            window.localStorage.setItem('my-collection', this.active.join(';'))
        },
    },
})
