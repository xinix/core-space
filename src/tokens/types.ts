export type ProductType = 'first-born'

export type ItemIcon =
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
    | 'infinite-ammo'
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

export type ItemDescription = 'rotating'

export type TokenType = {
    product: ProductType
    slug: string
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
    throw?: number | number[]
    range?: 's' | 'm' | 'l'
    short?: number
    medium?: number
    long?: number
    buy?: number
    sell?: number | number[]
    shield?: number | number[]
    blast?: number[]
    scatter?: number
    phase?: number
    description?: ItemDescription[]
    icons?: ItemIcon[]
}