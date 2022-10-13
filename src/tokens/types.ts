export type ProductType = 'first-born'

export type AttributeType =
    | 'rare'
    | 'effortless'
    | 'flip'
    | 'discard'
    | 'mine'
    | 'trophy'
    | 're-roll'
    | 'range-re-roll'
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
    | 'stim-health'
    | 'stim-health-plus'
    | 'stim-actions'
    | 'reload-ammo'
    | 'reload-ammo-accelerant'
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

export type ItemDescription = 'rotating'

export type TokenType = {
    product: ProductType
    slug: string
    icon?: string
    name: string
    color:
        | 'blue'
        | 'yellow'
        | 'orange'
        | 'red'
        | 'purple'
        | 'green'
        | 'light-green'
        | 'brown'
    size: 'xs' | 'sm' | 'md'
    close?: number
    heavy?: number
    throw?: number
    grenade?: number[]
    range?: 's' | 'm' | 'l'
    short?: number
    medium?: number
    long?: number
    buy?: number
    sell?: number | number[]
    blast?: number[]
    scatter?: number
    phase?: number
    armour?: number
    shield?: number
    description?: ItemDescription[]
    icons?: AttributeType[]
}
