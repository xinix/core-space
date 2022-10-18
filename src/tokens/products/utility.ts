import { TokenType } from '../types'

const tokens: TokenType[] = [
    {
        product: 'utility',
        slug: 'back-pack',
        name: 'Back pack',
        color: 'yellow',
        size: 'umd',
        util: 'all',
        buy: 20,
        sell: 11,
        icons: ['backpack-all'],
    },
    {
        product: 'utility',
        slug: 'bandolier',
        name: 'Bandolier',
        color: 'yellow',
        size: 'umd',
        util: 'nano',
        buy: 15,
        sell: 8,
        icons: ['belt', 'backpack-nano'],
    },
    {
        product: 'utility',
        slug: 'enhanced-combat-suit',
        name: 'Enhanced combat suit',
        color: 'purple',
        size: 'ulg',
        blue_armour: 3,
        close: 3,
        scramble: [0, 3],
        icons: ['re-roll-ranged'],
        buy: 58,
        sell: 35,
    },
    {
        product: 'utility',
        slug: 'heavy-demolition-harness',
        name: 'Heavy demolition harness',
        color: 'purple',
        size: 'ulg',
        close: 4,
        short: 2,
        icons: ['reliable', 'fire', 'mine'],
        buy: 42,
        sell: 20,
    },
    {
        product: 'utility',
        slug: 'heavy-fusion-cannon',
        name: 'Heavy fusion cannon',
        color: 'purple',
        size: 'ulg',
        short: 3,
        medium: 2,
        buy: 38,
        sell: 17,
        description: ['joined'],
    },
    {
        product: 'utility',
        slug: 'jump-pack-fueled',
        name: 'Jump pack fueled',
        color: 'purple',
        size: 'umd',
        scramble: [3, 5],
        fuel: 5,
        icons: ['effortless', 'fuel'],
        buy: 25,
        sell: 14,
    },
    {
        product: 'utility',
        slug: 'mech-arm',
        name: 'Mech arm',
        color: 'purple',
        size: 'umd',
        icons: ['repair', 'repair-2'],
        buy: 12,
        sell: 8,
    },
    {
        product: 'utility',
        slug: 'mounted-fusion-gun',
        name: 'Mounted fusion gun',
        color: 'purple',
        size: 'umd',
        short: 3,
        icons: ['interrupt'],
        buy: 18,
        sell: 10,
    },
    {
        product: 'utility',
        slug: 'mounted-line-rifle',
        name: 'Mounted line rifle',
        color: 'purple',
        size: 'umd',
        short: 3,
        medium: 2,
        icons: ['interrupt', 'triple-charge', 'reliable'],
        buy: 32,
        sell: 14,
    },
    {
        product: 'utility',
        slug: 'multi-tech-harness',
        name: 'Multi tech harness',
        color: 'purple',
        size: 'ulg',
        close: 3,
        icons: ['gear', 'data', 'repair'],
        buy: 24,
        sell: 12,
    },
    {
        product: 'utility',
        slug: 'outlands-exosuit',
        name: 'Outlands exosuit',
        color: 'purple',
        size: 'ulg',
        scramble: [0, 3],
        move: 1,
        blue_armour: 2,
        close: 3,
        icons: ['re-roll'],
        buy: 45,
        sell: 22,
    },
    {
        product: 'utility',
        slug: 'shield-rig-regen',
        name: 'Shield rig regen',
        color: 'purple',
        size: 'umd',
        blue_armour_regen: 3,
        buy: 40,
        sell: 18,
    },
    {
        product: 'utility',
        slug: 'shield-rig',
        name: 'Shield rig',
        color: 'purple',
        size: 'umd',
        blue_armour: 5,
        buy: 38,
        sell: 18,
    },
    {
        product: 'utility',
        slug: 'sling-mount',
        name: 'Sling mount',
        color: 'yellow',
        size: 'umd',
        icons: ['belt', 'effortless', 'weapon-mount'],
        buy: 8,
        sell: 5,
    },
    {
        product: 'utility',
        slug: 'smart-pack',
        name: 'Smart pack',
        color: 'yellow',
        size: 'umd',
        icons: ['gear', 'backpack-all'],
        buy: 24,
        sell: 12,
    },
    {
        product: 'utility',
        slug: 'utility-belt',
        name: 'Utility belt',
        color: 'yellow',
        size: 'umd',
        buy: 15,
        sell: 8,
        icons: ['belt', 'backpack-nano'],
    },
]
export default tokens
