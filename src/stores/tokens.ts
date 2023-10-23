import { defineStore } from 'pinia'
import {
    CoreSpaceToken,
    ProductType,
    SIZE_ENUM,
    SIZE_NUMBERS,
    TokenColor,
    TokenSize,
    TokenType,
    TradingPost,
} from '@/tokens/types'
import { db } from '@/db'
import { marketFilter } from '@/helpers/market-filter'
import { tokenFilter } from '@/helpers/token-filter'
import { joinsTokens } from '@/db/joins-tokens'
import { loadDataJson } from '@/helpers/data-loader'

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
            tradingPost: null as TradingPost | null,
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
                const qs = state.q
                    .toLowerCase()
                    .split(',')
                    .map((term) => term.trim())
                    .filter((term) => term != '')
                result = result.filter((a) =>
                    qs.some((q) => {
                        if (
                            q.startsWith('"') &&
                            q.endsWith('"') &&
                            q.length > 1
                        ) {
                            return (
                                a.name.toLowerCase() ==
                                q.toLocaleLowerCase().replace(/"/g, '')
                            )
                        } else {
                            return a.name.toLowerCase().indexOf(q) >= 0
                        }
                    })
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

        market: (state) => {
            if (state.tradingPost == null) return []
            const q = state.q.toLowerCase().trim()
            return tokenFilter(
                marketFilter(state.tradingPost, state.rawItems),
                {
                    q,
                    sizes: state.sizes,
                    colors: state.colors,
                }
            )
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
                    const data = (await loadDataJson(product)) as TokenType[]
                    await db.tokens.bulkAdd(data.map(toCoreSpaceToken))
                } catch (error) {
                    console.error(`Could not fetch "${product}"`, error)
                }
            }
            this.rawItems.push(
                ...(
                    await joinsTokens(
                        db.tokens.where('product').anyOf(products)
                    )
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
        visit(tradingPost: TradingPost) {
            this.tradingPost = tradingPost
        },

        buy(token: CoreSpaceToken) {
            const index = this.rawItems.findIndex(
                (item) => item.key === token.key
            )
            const { count, sold } = token
            let newSold = sold == undefined ? 0 : sold
            newSold++
            if (newSold > count) {
                newSold = count
            }
            this.rawItems[index].sold = newSold
            db.market.put({ tokenKey: token.key, sold: newSold }, token.key)
        },

        sell(token: CoreSpaceToken) {
            const index = this.rawItems.findIndex(
                (item) => item.key === token.key
            )
            const { sold } = token
            let newSold = sold == undefined ? 0 : sold
            newSold--
            if (newSold < 0) {
                newSold = 0
            }
            this.rawItems[index].sold = newSold
            db.market.put({ tokenKey: token.key, sold: newSold }, token.key)
        },
    },
})
