import { defineStore } from 'pinia'
import { ProductType } from '@/tokens/types'

export const useProducts = defineStore('products', {
    state: () => {
        const active: ProductType[] = []
        const hist = window.localStorage.getItem('products')
        if (hist != null) {
            active.push(...JSON.parse(hist))
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
            window.localStorage.setItem('products', JSON.stringify(this.active))
        },
    },
})
