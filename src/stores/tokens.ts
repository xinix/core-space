import { defineStore } from 'pinia'
import { TokenType } from '@/tokens/types'
import tokens from '@/tokens'

const sizeOrder = ['nano', 'sm', 'md', 'lg']

const sortToken = (a: TokenType, b: TokenType) => {
    return (
        sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size) ||
        a.color.localeCompare(b.color) ||
        a.name.localeCompare(b.name)
    )
}

export const useTokens = defineStore('tokens', {
    state: () => {
        return {
            q: '',
            active: '',
            rawItems: [...tokens] as TokenType[],
        }
    },
    getters: {
        items: (state) => {
            if (state.active !== '') {
                return state.rawItems.filter((a) => a.slug === state.active)
            }

            const q = state.q.toLowerCase().trim()
            if (q != '') {
                return state.rawItems.filter(
                    (a) => a.name.toLowerCase().indexOf(q) >= 0
                )
            }
            return state.rawItems.sort(sortToken)
        },
        getItemBySlug: (state) => {
            return (slug: string) => {
                return state.rawItems.find((a) => a.slug === slug)
            }
        },
    },
    actions: {
        transfer(data: { q: string }) {
            this.q = data.q
        },
    },
})
