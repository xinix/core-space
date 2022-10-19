export type ProductType =
    | 'core-space'
    | 'zed'
    | 'galactic-corps'
    | 'purge-outbreak'
    | 'first-born'
    | 'fury'
    | 'line-of-fire'
    | 'rysa'
    | 'trading-post-5'
    | 'utility'

export type TokenMap = {
    'core-space': CoreSpaceToken[]
    'zed': CoreSpaceToken[]
    'galactic-corps': CoreSpaceToken[]
    'purge-outbreak': CoreSpaceToken[]
    'first-born': CoreSpaceToken[]
    'fury': CoreSpaceToken[]
    'line-of-fire': CoreSpaceToken[]
    'rysa': CoreSpaceToken[]
    'trading-post-5': CoreSpaceToken[]
    'utility': CoreSpaceToken[]
}

export type AttributeType =
    | 'cannot-reload'
    | 'jam'
    | 'time-pulse'
    | 'scatter-core'
    | 'action-2'
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

export type CoreSpaceToken = TokenType & {
    key: string
}

export type TokenType = {
    product: ProductType
    slug: string
    name: string
    color:
        | 'blue'
        | 'yellow'
        | 'orange'
        | 'purple'
        | 'violet'
        | 'green'
        | 'lime'
        | 'brown'
        | 'white'
    size: 'nano' | 'sm' | 'md' | 'lg' | 'xl' | 'umd' | 'ulg'
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
