import { CoreSpaceToken, TokenMap, TokenType } from '@/tokens/types'

import coreSpace from '@/tokens/products/core-space'
import zed from '@/tokens/products/zed'
import galacticCorps from '@/tokens/products/galactic-corps'
import utility from '@/tokens/products/utility'

import firstBorn from '@/tokens/products/first-born'
import lineOfFire from '@/tokens/products/line-of-fire'
import fury from '@/tokens/products/fury'
import rysa from '@/tokens/products/rysa'
import tradingPost5 from '@/tokens/products/trading-post-5'
import purgeOutbreak from '@/tokens/products/purge-outbreak'
import deadOrAlive from '@/tokens/products/dead-or-alive'
import cygnus from '@/tokens/products/cygnus'
import poseidon from '@/tokens/products/poseidon'
import skylark from '@/tokens/products/skylark'
import yamato from '@/tokens/products/yamato'

function toCoreSpaceToken(token: TokenType): CoreSpaceToken {
    return {
        key: `${token.product}-${token.slug}`,
        ...token,
    }
}

const tokens: TokenMap = {
    'core-space': coreSpace.map(toCoreSpaceToken),
    'zed': zed.map(toCoreSpaceToken),
    'galactic-corps': galacticCorps.map(toCoreSpaceToken),
    'purge-outbreak': purgeOutbreak.map(toCoreSpaceToken),
    'dead-or-alive': deadOrAlive.map(toCoreSpaceToken),
    'cygnus': cygnus.map(toCoreSpaceToken),
    'poseidon': poseidon.map(toCoreSpaceToken),
    'skylark': skylark.map(toCoreSpaceToken),
    'yamato': yamato.map(toCoreSpaceToken),
    'first-born': firstBorn.map(toCoreSpaceToken),
    'fury': fury.map(toCoreSpaceToken),
    'line-of-fire': lineOfFire.map(toCoreSpaceToken),
    'rysa': rysa.map(toCoreSpaceToken),
    'trading-post-5': tradingPost5.map(toCoreSpaceToken),
    'utility': utility.map(toCoreSpaceToken),
}

export default tokens
