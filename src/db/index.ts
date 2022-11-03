import Dexie, { Table } from 'dexie'
import { CoreSpaceToken } from '@/tokens/types'

export class CoreSpaceDB extends Dexie {
    tokens!: Table<CoreSpaceToken>

    constructor() {
        super('core-space')
        this.version(1).stores({
            tokens: '&key, product, name, color, size, [color+size+name], buy, sell',
        })

        // e.g. CLEAR tokens table on upgrade
        // this.version(2).upgrade((tx) => tx.table('tokens').clear())
    }
}

export const db = new CoreSpaceDB()
