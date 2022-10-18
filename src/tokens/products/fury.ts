import { TokenType } from '@/tokens/types'

const tokens: TokenType[] = [
    {
        product: 'fury',
        slug: 'dyson-draw-12',
        name: 'Dyson draw 12',
        color: 'green',
        size: 'sm',
        sell: 5,
        icons: ['dyson', 'dyson-range'],
    },
    {
        product: 'fury',
        slug: 'dyson-draw-8',
        name: 'Dyson draw 8',
        color: 'green',
        size: 'sm',
        sell: 5,
        icons: ['dyson', 'dyson-range'],
    },
    {
        product: 'fury',
        slug: 'guardian-bane',
        name: 'Guardian bane',
        color: 'blue',
        size: 'xl',
        close: 4,
        buy: 0,
        crystals: ['purple', 'orange', 'green'],
        sell: 30,
        icons: ['scythe'],
    },
    {
        product: 'fury',
        slug: 'insanity-blades',
        name: 'Insanity blades',
        color: 'blue',
        size: 'md',
        close: 3,
        buy: 0,
        crystals: ['purple'],
        sell: 21,
        icons: ['fear'],
    },
    {
        product: 'fury',
        slug: 'line-pistol-energy',
        name: 'Line pistol energy',
        color: 'blue',
        size: 'sm',
        short: 3,
        crystals: ['orange'],
        buy: 18,
        sell: 12,
        icons: ['triple-charge'],
    },
    {
        product: 'fury',
        slug: 'line-rifle-advanced-energy',
        name: 'Line rifle advanced energy',
        color: 'blue',
        size: 'lg',
        short: 3,
        medium: 3,
        long: 3,
        crystals: ['green', 'green', 'green'],
        buy: 25,
        sell: 18,
        icons: ['triple-charge'],
    },
    {
        product: 'fury',
        slug: 'machine-pistol',
        name: 'Machine pistol',
        color: 'blue',
        size: 'sm',
        short: 3,
        crystals: ['orange', 'green'],
        buy: 15,
        sell: 12,
        icons: ['sustained-fire', 'reliable'],
    },
    {
        product: 'fury',
        slug: 'n-ammo',
        name: 'Ammo',
        color: 'orange',
        size: 'nano',
        icons: ['ammo', 'discard'],
    },
    {
        product: 'fury',
        slug: 'n-heal',
        name: 'Heal stim',
        color: 'orange',
        size: 'nano',
        heal: 3,
        buy: 4,
        sell: 2,
        icons: ['discard'],
    },
    {
        product: 'fury',
        slug: 'n-reroll',
        name: 'N reroll',
        color: 'orange',
        size: 'nano',
        buy: 18,
        sell: 11,
        icons: ['re-roll-ranged'],
    },
    {
        product: 'fury',
        slug: 'n-shard-yellow',
        name: 'Yellow Shard',
        color: 'green',
        size: 'nano',
        throw: 4,
        sell: 3,
        icons: ['effortless'],
    },
    {
        product: 'fury',
        slug: 'n-walkie',
        name: 'Walkie',
        color: 'orange',
        size: 'nano',
        buy: 5,
        sell: 3,
        icons: ['swap'],
    },
    {
        product: 'fury',
        slug: 'recoil-custom-headgear',
        name: 'Recoil custom headgear',
        color: 'yellow',
        size: 'sm',
        throw: 3,
        buy: 22,
        sell: 18,
        armour: 1,
        icons: ['effortless-armour', 'boomerang'],
    },
    {
        product: 'fury',
        slug: 's-ammo',
        name: 'Accelerant ammo',
        color: 'orange',
        size: 'nano',
        crystals: ['orange'],
        buy: 0,
        sell: 3,
        icons: ['super-ammo', 'discard'],
    },
    {
        product: 'fury',
        slug: 'shroud-armour',
        name: 'Shroud armour',
        color: 'green',
        size: 'sm',
        armour: 1,
        sell: 14,
        icons: ['ignore-knowledge', 'true-born'],
    },
    {
        product: 'fury',
        slug: 'titan-combat-combo',
        name: 'Titan combat combo',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        buy: 27,
        sell: 15,
        close: 3,
    },
]
export default tokens
