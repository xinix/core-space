import {
    CoreSpaceToken,
    SIZE_ENUM,
    TokenColor,
    TokenSize,
} from '@/tokens/types'

type TokenFilters = {
    q: string
    colors: TokenColor[]
    sizes: TokenSize[]
}

export function tokenFilter(
    items: CoreSpaceToken[],
    payload: TokenFilters
): CoreSpaceToken[] {
    let result = items
    const { q, colors, sizes } = payload

    if (q != '') {
        result = result.filter((a) => a.name.toLowerCase().indexOf(q) >= 0)
    }
    if (colors.length > 0) {
        result = result.filter((a) => colors.indexOf(a.color) >= 0)
    }
    if (sizes.length > 0) {
        result = result.filter((a) => sizes.indexOf(SIZE_ENUM[a.size]) >= 0)
    }
    return result
}
