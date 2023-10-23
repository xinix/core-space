export type ProductType =
    | 'core-space'
    | 'zed'
    | 'galactic-corps'
    | 'purge-outbreak'
    | 'cygnus'
    | 'poseidon'
    | 'skylark'
    | 'yamato'
    | 'rogue'
    | 'shift-change'
    | 'first-born'
    | 'fury'
    | 'line-of-fire'
    | 'rysa'
    | 'trading-post-5'
    | 'utility'
    | 'wanted'
    | 'black-star'

export type TradingPost =
    | 'bs-mart'
    | 'ucp'
    | 'claw-store'
    | 'armourote'
    | 'tech-noir'
    | 'giger'
    | 'workshop'

export type AttributeType =
    | 'stun'
    | 'armour-re-roll'
    | 'cuffs'
    | 'grapple'
    | 'impervious-1'
    | 'heal-2'
    | 'mission-key'
    | 'flash'
    | 'burst'
    | 'cannot-reload'
    | 'jam'
    | 'time-pulse'
    | 'scatter-core'
    | 'action-2'
    | 'ammo-21'
    | 'ammo-7'
    | 'ammo-box'
    | 'ammo-d6'
    | 'dangerous'
    | 'fire'
    | 'bomb'
    | 'toxic'
    | 'scythe'
    | 'data'
    | 'gear'
    | 'fuel'
    | 'repair-2'
    | 'interrupt'
    | 'triple-charge'
    | 'symbiote'
    | 'fear'
    | 'ignore-knowledge'
    | 'effortless-armour'
    | 'hover'
    | 'supply-drop'
    | 'special-armour'
    | 'blue-armour'
    | 'blue-armour-regen'
    | 'true-born'
    | 'rare'
    | 'effortless'
    | 'flip'
    | 'discard'
    | 'mine'
    | 'trophy'
    | 're-roll'
    | 're-roll-ranged'
    | 'burst-1'
    | 'burst-2'
    | 'full-charge'
    | 'infinite'
    | 'reliable'
    | 'super-reliable'
    | 'target-lock'
    | 'silent'
    | 'sustained-fire'
    | 'grenade-launcher'
    | 'ammo-returns'
    | 'stim-skill'
    | 'stim-skill-plus'
    | 'stim-heal'
    | 'stim-heal-plus'
    | 'stim-combat'
    | 'reload-ammo'
    | 'freeze'
    | 'timewarp'
    | 'scatter'
    | 'dyson'
    | 'dyson-throw'
    | 'dyson-range'
    | 'boomerang'
    | 'larva'
    | 'repair'
    | 'physical_armour'
    | 'shield_armour'
    | 'phase'
    | 'throw'
    | 'close'
    | 'grenade'
    | 'range'
    | 'short'
    | 'medium'
    | 'long'
    | 'event'
    | 'armour'
    | 'shield'
    | 'mech'
    | 'heavy'
    | 'necro-flask'
    | 'deflect'
    | 'fade-to-black-3'
    | 'blast-2'
    | 'manipulate-3'
    | 'artifact'
    | 'infra-lens'
    | 'scramble'
    | 'move'
    | 'free-close'
    | 'na'
    | 'effortless-reload'
    | 'search'
    | 'pairs'
    | 'key'
    | 'explode'
    | 'swap'
    | 'ammo'
    | 'super-ammo'
    | 'temp-armour'
    | 'objective'
    | 'ignore-armour'
    | 'ignore-shield'
    | 'auto-close-hit'
    | 'breach'
    | 'backpack-all'
    | 'backpack-nano'
    | 'belt'
    | 'weapon-mount'

export type CrystalType = 'green' | 'orange' | 'purple'

export type ItemDescription =
    | 'flame-fuel'
    | 'rotating'
    | 'larva'
    | 'mineral'
    | 'dyson-rod'
    | 'detonator'
    | 'mines'
    | 'caaligorn'
    | 'joined'
    | 'credits'
    | 'hack'
    | 'raw-blue'
    | 'ship-parts'
    | 'tech-pack'
    | 'mothers-venom'
    | 'rock'
    | 'chit'
    | 'aug'
    | 'merg'
    | 'purge-tokens'
    | 'port'
    | 'stim-vest'
    | 'supply-drop'

export type TokenColor =
    | 'blue'
    | 'yellow'
    | 'orange'
    | 'purple'
    | 'violet'
    | 'green'
    | 'lime'
    | 'brown'
    | 'white'
    | 'teal'

export type TokenSize = 'nano' | 'sm' | 'md' | 'lg' | 'xl' | 'umd' | 'ulg'

export const SIZE_ENUM: any = {
    0: 'nano',
    1: 'sm',
    2: 'md',
    3: 'lg',
    4: 'xl',
    5: 'umd',
    6: 'ulg',
}

export const SIZE_NUMBERS = {
    nano: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    umd: 5,
    ulg: 6,
}

export type TokenType = {
    product: ProductType
    slug: string
    name: string
    color: TokenColor
    size: TokenSize
    count: number
    close?: number
    heavy?: number
    throw?: number
    grenade?: number[]
    explode?: number[]
    range?: 's' | 'm' | 'l'
    short?: number
    medium?: number
    long?: number
    buy?: number | number[]
    crystals?: CrystalType[]
    sell?: number | number[]
    blast?: number[]
    scatter?: number | number[]
    phase?: number
    armour?: number
    blue_armour?: number
    blue_armour_regen?: number
    shield?: number
    dyson?: number
    move?: number
    scramble?: number[]
    heal?: number
    super_heal?: number
    skill?: number
    super_skill?: number
    action?: number
    freeze?: number[]
    util?: 'all' | 'nano' | 'sling'
    fuel?: number
    description?: ItemDescription[]
    icons?: AttributeType[]
}

export type CoreSpaceToken = {
    key: string
    size: number
    product: ProductType
    count: number
    slug: string
    name: string
    color: TokenColor
    close?: number
    heavy?: number
    throw?: number
    grenade?: number[]
    explode?: number[]
    range?: 's' | 'm' | 'l'
    short?: number
    medium?: number
    long?: number
    buy?: number | number[]
    crystals?: CrystalType[]
    sell?: number | number[]
    blast?: number[]
    scatter?: number | number[]
    phase?: number
    armour?: number
    blue_armour?: number
    blue_armour_regen?: number
    shield?: number
    dyson?: number
    move?: number
    scramble?: number[]
    heal?: number
    super_heal?: number
    skill?: number
    super_skill?: number
    action?: number
    freeze?: number[]
    util?: 'all' | 'nano' | 'sling'
    fuel?: number
    description?: ItemDescription[]
    icons?: AttributeType[]
    sold?: number
}

export type MarketRecord = {
    tokenKey: string
    sold: number
}
