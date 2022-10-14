import { defineStore } from 'pinia'
import { TokenType } from '@/tokens/types'
import tokens from '@/tokens'

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
                //.sort((a, b) => a.name.localeCompare(b.name))
            }
            return state.rawItems
            //.sort((a, b) => a.name.localeCompare(b.name))
        },
    },
    actions: {
        transfer(data: { q: string; slug: string }) {
            console.log(data)
            this.q = data.q
            this.active = data.slug
        },
    },
})
