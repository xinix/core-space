import { defineStore } from 'pinia'
import { CoreSpaceToken, ProductType } from '@/tokens/types'
import tokens from '@/tokens'

const sizeOrder = ['nano', 'sm', 'md', 'lg', 'xl', 'umd', 'ulg']

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
            const q = state.q.toLowerCase().trim()
            if (q != '') {
                return state.rawItems.filter(
                    (a) => a.name.toLowerCase().indexOf(q) >= 0
                )
            }
            return state.rawItems
        },
        getItemByKey: (state) => {
            return (key: string) => {
                return state.rawItems.find((a) => a.key === key)
            }
        },
    },
    actions: {
        load(products: ProductType[]) {
            const items: CoreSpaceToken[] = []
            for (const product of products) {
                items.push(...tokens[product])
            }
            this.rawItems.splice(
                0,
                this.rawItems.length,
                ...items.sort(sortToken)
            )
        },
    },
})
