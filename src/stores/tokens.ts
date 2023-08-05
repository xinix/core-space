import { defineStore } from 'pinia'
import {
    CoreSpaceToken,
    ProductType,
    TokenColor,
    TokenSize,
} from '@/tokens/types'
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
                const qs = state.q.toLowerCase().split(',').map(term => term.trim()).filter(term => term != '');
                result = result.filter(
                    (a) => qs.some(q => {
                        if (q.startsWith('"') && q.endsWith('"') && q.length > 1) {
                            return a.name.toLowerCase() == q.toLocaleLowerCase().replace(/"/g, '');
                        } else {
                            return a.name.toLowerCase().indexOf(q) >= 0;
                        }
                    })
                );
            }
            if (state.colors.length > 0) {
                result = result.filter((a) => state.colors.indexOf(a.color) >= 0);
            }
            if (state.sizes.length > 0) {
                result = result.filter((a) => state.sizes.indexOf(a.size) >= 0);
            }
            return result;
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
                if (tokens[product] != undefined) {
                    items.push(...tokens[product])
                }
            }
            this.rawItems.splice(
                0,
                this.rawItems.length,
                ...items.sort(sortToken)
            )
        },
        filter(colors: TokenColor[], sizes: TokenSize[]) {
            this.colors.splice(0, this.colors.length, ...colors)
            this.sizes.splice(0, this.sizes.length, ...sizes)
        },
    },
})
