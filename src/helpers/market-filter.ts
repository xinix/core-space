import { CoreSpaceToken, TradingPost } from '@/tokens/types'

export function marketFilter(
    post: TradingPost,
    items: CoreSpaceToken[],
): CoreSpaceToken[] {
    return filter[post](items)
}

function isWithin(
    value: undefined | number | number[],
    min: number,
    max: number,
): boolean {
    if (value == undefined) return false
    if (Array.isArray(value)) {
        for (const num of value) {
            if (num >= min && num <= max) {
                return true
            }
        }
        return false
    }
    return value >= min && value <= max
}

const filter = {
    'bs-mart': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* all items with buy <= 4UA */
        return items.filter(
            (a) => isWithin(a.buy, 0, 4) && a.crystals == undefined,
        )
    },
    'ucp': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* close assault with buy 5-9UA */
        return items.filter(
            (a) => isWithin(a.buy, 5, 9) && a.close != undefined,
        )
    },
    'claw-store': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* ranged assault with buy 5-9UA */
        return items.filter(
            (a) =>
                isWithin(a.buy, 5, 9) &&
                (a.short != undefined ||
                    a.medium != undefined ||
                    a.long != undefined),
        )
    },
    'armourote': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* armour with buy 5-9UA */
        return items.filter(
            (a) => isWithin(a.buy, 5, 9) && a.color === 'yellow',
        )
    },
    'tech-noir': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* special items  with buy 5-9UA */
        return items.filter(
            (a) => isWithin(a.buy, 5, 9) && a.color === 'orange',
        )
    },
    'giger': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* all items with buy +10UA */
        return items.filter((a) => isWithin(a.buy, 10, 999))
    },
    'workshop': (items: CoreSpaceToken[]): CoreSpaceToken[] => {
        /* purge items  */
        return items.filter((a) => a.color === 'teal')
    },
}
