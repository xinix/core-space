import { defineStore } from 'pinia'
import {
    CoreSpaceToken,
    ProductType,
    SIZE_ENUM,
    SIZE_NUMBERS,
    TokenColor,
    TokenSize,
    TokenType,
} from '@/tokens/types'
import axios from 'axios'
import { db } from '@/db'

const sortToken = (a: CoreSpaceToken, b: CoreSpaceToken) => {
    return (
        a.color.localeCompare(b.color) ||
        a.size - b.size ||
        a.name.localeCompare(b.name)
    )
}

function toCoreSpaceToken(token: TokenType): CoreSpaceToken {
    return {
        ...token,
        key: `${token.product}-${token.slug}`,
        size: SIZE_NUMBERS[token.size],
    }
}

export const useTokens = defineStore('tokens', {
    state: () => {
        return {
            changed: true,
            loading: false,
            q: '',
            sizes: [] as TokenSize[],
            colors: [] as TokenColor[],
            active: '',
            rawItems: [] as CoreSpaceToken[],
        }
    },
    getters: {
        items: (state) => {
            const q = state.q.toLowerCase().trim()
            let result = state.rawItems
            if (q != '') {
                result = result.filter(
                    (a) => a.name.toLowerCase().indexOf(q) >= 0
                )
            }
            if (state.colors.length > 0) {
                result = result.filter(
                    (a) => state.colors.indexOf(a.color) >= 0
                )
            }
            if (state.sizes.length > 0) {
                result = result.filter(
                    (a) => state.sizes.indexOf(SIZE_ENUM[a.size]) >= 0
                )
            }
            return result
        },
        getItemByKey: () => {
            return async (key: string) => {
                return db.tokens.get({ key })
            }
        },
    },
    actions: {
        async load(products: ProductType[]) {
            this.loading = true
            this.changed = false
            this.rawItems.splice(0, this.rawItems.length)
            for (const product of products) {
                const counters = await db.tokens.where({ product }).count()
                if (counters > 0) continue

                try {
                    const url = `/data/${product}.json`
                    const { data } = await axios.get(url)
                    await db.tokens.bulkAdd(data.map(toCoreSpaceToken))
                } catch (error) {
                    console.error(`Could not fetch "${product}"`, error)
                }
            }
            this.rawItems.push(
                ...(
                    await db.tokens.where('product').anyOf(products).toArray()
                ).sort(sortToken)
            )
            this.loading = false
        },
        setChanged() {
            this.changed = true
        },
        filter(colors: TokenColor[], sizes: TokenSize[]) {
            this.colors.splice(0, this.colors.length, ...colors)
            this.sizes.splice(0, this.sizes.length, ...sizes)
        },
    },
})
