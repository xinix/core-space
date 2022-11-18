import Dexie, { Collection } from 'dexie'
import { CoreSpaceToken } from '@/tokens/types'
import { db } from '@/db/index'

export function joinsTokens(collection: Collection<CoreSpaceToken>) {
    return collection.toArray((tokens) => {
        const marketPromise = tokens.map((token) => db.market.get(token.key))

        return Dexie.Promise.all(marketPromise).then((marketItem) => {
            tokens.forEach((token, index) => {
                const item = marketItem[index]
                token.sold = item == undefined ? 0 : item.sold
            })
            return tokens
        })
    })
}
