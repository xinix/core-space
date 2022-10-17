import { TokenType } from '../types'

const tokens: TokenType[] = [
    {
        product: 'line-of-fire',
        slug: 'burst-vest',
        name: 'Burst vest',
        color: 'white',
        size: 'sm',
        armour: 1,
        description: ['rotating'],
        icons: ['effortless', 'flip', 'discard'],
        sell: 4,
    },
    {
        product: 'line-of-fire',
        slug: 'hi-ex',
        name: 'Hi-ex explosive',
        color: 'white',
        size: 'sm',
        explode: [6, 5, 4, 3],
        icons: ['reliable', 'bomb'],
        sell: 2,
    },
    {
        product: 'line-of-fire',
        slug: 'medi-pack',
        name: 'Medi pack',
        color: 'white',
        size: 'sm',
        heal: 4,
    },
    {
        product: 'line-of-fire',
        slug: 'n-action',
        name: 'Stim action',
        color: 'white',
        size: 'nano',
        action: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'line-of-fire',
        slug: 'n-heal',
        name: 'Stim heal',
        color: 'white',
        size: 'nano',
        heal: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'line-of-fire',
        slug: 'n-skill',
        name: 'Stim skill',
        color: 'white',
        size: 'nano',
        skill: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'line-of-fire',
        slug: 'tactical-military-pistol',
        name: 'Tactical military pistol',
        color: 'white',
        size: 'sm',
        short: 3,
        medium: 1,
        icons: ['burst-1'],
        sell: 3,
    },
    {
        product: 'line-of-fire',
        slug: 'tech-pack',
        name: 'Tech pack',
        color: 'white',
        size: 'sm',
        icons: ['repair'],
        sell: 1,
    },
    {
        product: 'line-of-fire',
        slug: 'w-ammo',
        name: 'Ammo',
        color: 'white',
        size: 'nano',
        icons: ['ammo', 'discard'],
        sell: 1,
    },
    {
        product: 'line-of-fire',
        slug: 'w-mine',
        name: 'Grenade',
        color: 'white',
        size: 'nano',
        grenade: [5, 3, 2],
        icons: ['discard'],
        sell: 2,
    },
    {
        product: 'line-of-fire',
        slug: 'ws-ammo',
        name: 'Accelerant ammo',
        color: 'white',
        size: 'nano',
        icons: ['super-ammo', 'discard'],
        sell: 1,
    },
]
export default tokens
