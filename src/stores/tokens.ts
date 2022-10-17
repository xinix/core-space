import { defineStore } from 'pinia'
import { CoreSpaceToken, ProductType } from '@/tokens/types'
import tokens from '@/tokens'

const sizeOrder = ['nano', 'sm', 'md', 'lg']

const sortToken = (a: CoreSpaceToken, b: CoreSpaceToken) => {
    return (
        a.color.localeCompare(b.color) ||
        sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size) ||
        a.name.localeCompare(b.name)
    )
}

export const useTokens = defineStore('tokens', {
    state: () => {
        return {
            q: '',
            active: '',
            rawItems: [] as CoreSpaceToken[],
        }
    },
    getters: {
        items: (state) => {
            if (state.active !== '') {
                return state.rawItems.filter((a) => a.key === state.active)
            }

            const q = state.q.toLowerCase().trim()
            if (q != '') {
                return state.rawItems.filter(
                    (a) => a.name.toLowerCase().indexOf(q) >= 0
                )
            }
            return state.rawItems.sort(sortToken)
        },
        getItemByKey: (state) => {
            return (key: string) => {
                return state.rawItems.find((a) => a.key === key)
            }
        },
    },
    actions: {
        load(products: ProductType[]) {
            this.rawItems.splice(0, this.rawItems.length)
            for (const product of products) {
                this.rawItems.push(...tokens[product])
            }
        },

        loadIfNeeded(products: ProductType[]) {
            if (this.rawItems.length === 0) {
                this.load(products)
            }
        },
    },
})
