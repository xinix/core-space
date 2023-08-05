import { TokenType } from '@/tokens/types'

const tokens: TokenType[] = [
    {
        product: 'first-born',
        slug: 'port-engram',
        name: 'Port engram',
        color: 'green',
        size: 'sm',
        sell: 3,
        icons: ['scatter', 'effortless', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'shield-engram',
        name: 'Shield engram',
        color: 'green',
        size: 'sm',
        sell: 3,
        description: ['rotating'],
        icons: ['effortless', 'flip', 'physical_armour', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'phase-engram',
        name: 'Phase engram',
        color: 'green',
        size: 'sm',
        sell: 5,
        phase: 1,
        icons: ['effortless', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'liege-shard-roll',
        name: 'Liege shard (roll)',
        color: 'green',
        size: 'sm',
        close: 3,
        throw: 3,
        sell: 6,
        icons: ['re-roll'],
    },
    {
        product: 'first-born',
        slug: 'liege-shard-eff',
        name: 'Liege shard',
        color: 'green',
        size: 'sm',
        close: 3,
        throw: 3,
        sell: 4,
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'dyson-spike',
        name: 'Dyson spike',
        color: 'green',
        size: 'sm',
        close: 3,
        grenade: [6, 3, 2],
        range: 'm',
        sell: 8,
    },
    {
        product: 'first-born',
        slug: 'dyson-draw-5',
        name: 'Dyson draw (5)',
        color: 'green',
        size: 'sm',
        sell: 8,
        dyson: 5,
        icons: ['dyson-throw'],
    },
    {
        product: 'first-born',
        slug: 'dyson-draw-3',
        name: 'Dyson draw (3)',
        color: 'green',
        size: 'sm',
        sell: 5,
        dyson: 3,
        icons: ['dyson-throw'],
    },
    {
        product: 'first-born',
        slug: 'dyson-vent-5',
        name: 'Dyson vent (5)',
        color: 'green',
        size: 'sm',
        sell: 8,
        dyson: 5,
        icons: ['dyson-range'],
    },
    {
        product: 'first-born',
        slug: 'dyson-vent-3',
        name: 'Dyson vent (3)',
        color: 'green',
        size: 'sm',
        sell: 8,
        dyson: 3,
        icons: ['dyson-range'],
    },
    {
        product: 'first-born',
        slug: 'phase-loop-4',
        name: 'Phase loop (4)',
        color: 'green',
        size: 'sm',
        sell: 12,
        throw: 4,
        icons: ['boomerang'],
    },
    {
        product: 'first-born',
        slug: 'phase-loop-3',
        name: 'Phase loop (3)',
        color: 'green',
        size: 'sm',
        sell: 6,
        throw: 3,
        icons: ['boomerang'],
    },
    {
        product: 'first-born',
        slug: 'larva',
        name: 'Larva',
        color: 'green',
        size: 'sm',
        description: ['larva'],
        icons: ['flip'],
    },
    {
        product: 'first-born',
        slug: 'repair-4',
        name: 'Fibril (4)',
        color: 'green',
        size: 'sm',
        sell: 8,
        icons: ['repair', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'repair-2',
        name: 'Fibril (2)',
        color: 'green',
        size: 'sm',
        sell: 5,
        icons: ['repair', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'repair-1',
        name: 'Fibril (1)',
        color: 'green',
        size: 'sm',
        sell: 3,
        icons: ['repair', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'necro-flask',
        name: 'Necro flask',
        color: 'green',
        size: 'sm',
        sell: 5,
        icons: ['necro-flask'],
    },
    {
        product: 'first-born',
        slug: 'sypher-orb',
        name: 'Sypher orb',
        color: 'green',
        size: 'sm',
        sell: 2,
        icons: ['effortless', 'event', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'ecco-orb',
        name: 'Ecco orb',
        color: 'green',
        size: 'sm',
        sell: 7,
        description: ['rotating'],
        icons: ['deflect', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'photon-shifter',
        name: 'Photon shifter',
        color: 'green',
        size: 'sm',
        sell: 4,
        icons: ['fade-to-black-3', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'matter-shifter-1',
        name: 'Matter shifter (1)',
        color: 'green',
        size: 'sm',
        sell: 4,
        icons: ['blast-2', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'matter-shifter-2',
        name: 'Matter shifter (2)',
        color: 'green',
        size: 'sm',
        sell: 5,
        icons: ['manipulate-3', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'liege-ring-4',
        name: 'Liege ring (4)',
        color: 'green',
        size: 'sm',
        sell: 6,
        short: 4,
        description: ['rotating'],
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 'liege-ring-3',
        name: 'Liege ring (3)',
        color: 'green',
        size: 'sm',
        sell: 4,
        short: 3,
        description: ['rotating'],
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 'artifact-1',
        name: 'Artifact (1)',
        color: 'green',
        size: 'sm',
        sell: [4, 8],
        icons: ['artifact'],
    },
    {
        product: 'first-born',
        slug: 'artifact-2',
        name: 'Artifact (2)',
        color: 'green',
        size: 'sm',
        sell: [4, 8],
        icons: ['artifact'],
    },
    {
        product: 'first-born',
        slug: 'quantum-lens',
        name: 'Quantum lens',
        color: 'green',
        size: 'sm',
        sell: 4,
        range: 's',
        icons: ['effortless', 'infra-lens', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'artifact-3',
        name: 'Artifact (3)',
        color: 'green',
        size: 'sm',
        sell: [4, 5, 7, 11],
        icons: ['artifact'],
    },
    {
        product: 'first-born',
        slug: 'artifact-4',
        name: 'Artifact (4)',
        color: 'green',
        size: 'sm',
        sell: [4, 5, 7, 11],
        icons: ['artifact'],
    },
    {
        product: 'first-born',
        slug: 'artifact-5',
        name: 'Artifact (5)',
        color: 'green',
        size: 'sm',
        sell: [4, 5, 7, 11],
        icons: ['artifact'],
    },
    {
        product: 'first-born',
        slug: 'artifact-6',
        name: 'Artifact (6)',
        color: 'green',
        size: 'sm',
        sell: [4, 5, 7, 11],
        icons: ['artifact'],
    },
    {
        product: 'first-born',
        slug: 'bracer',
        name: 'Bracer',
        color: 'green',
        size: 'sm',
        sell: 6,
        short: 2,
        medium: 3,
        icons: ['effortless', 'silent', 'infinite'],
    },
    {
        product: 'first-born',
        slug: 'shard-fins-3',
        name: 'Shard fins (3)',
        color: 'green',
        size: 'sm',
        sell: 8,
        scramble: [1, 3],
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'shard-fins-4',
        name: 'Shard fins (4)',
        color: 'green',
        size: 'sm',
        sell: 4,
        move: 4,
        icons: ['effortless', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'raw-minerals',
        name: 'Raw minerals (Green Yellow)',
        color: 'green',
        size: 'sm',
        sell: 3,
        description: ['mineral'],
    },
    {
        product: 'first-born',
        slug: 'raw-minerals-1',
        name: 'Raw minerals (Yellow Yellow)',
        color: 'green',
        size: 'sm',
        sell: 4,
        description: ['mineral'],
    },
    {
        product: 'first-born',
        slug: 'liege-shard',
        name: 'Liege shard',
        color: 'green',
        size: 'sm',
        close: 3,
        throw: 3,
        sell: 5,
        icons: ['free-close'],
    },
    {
        product: 'first-born',
        slug: 'mining-drubber',
        name: 'Mining drubber',
        color: 'orange',
        size: 'sm',
        buy: 4,
        sell: 2,
        icons: ['mine'],
    },
    {
        product: 'first-born',
        slug: 'combat-vest',
        name: 'Combat vest',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        buy: 7,
        sell: 3,
    },
    {
        product: 'first-born',
        slug: 'combat-vest-shiny',
        name: 'Combat vest shiny',
        color: 'yellow',
        size: 'sm',
        buy: 8,
        sell: 4,
        armour: 1,
    },
    {
        product: 'first-born',
        slug: 'shield-belt',
        name: 'Shield belt',
        color: 'yellow',
        size: 'sm',
        shield: 1,
        buy: 4,
        sell: 2,
    },
    {
        product: 'first-born',
        slug: 'shield-belt-custom',
        name: 'Shield belt custom',
        color: 'yellow',
        size: 'sm',
        shield: 2,
        buy: 7,
        sell: 3,
    },
    {
        product: 'first-born',
        slug: 'neoflex-plate-upgrade',
        name: 'Neoflex plate upgrade',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        icons: ['na', 'mech'],
    },
    {
        product: 'first-born',
        slug: 'common-pistol',
        name: 'Common pistol',
        color: 'blue',
        size: 'sm',
        buy: 3,
        sell: 1,
        short: 1,
        medium: 1,
        icons: ['burst-1'],
    },
    {
        product: 'first-born',
        slug: 'military-pistol',
        name: 'Military pistol',
        color: 'blue',
        size: 'sm',
        buy: 8,
        sell: 4,
        short: 2,
        medium: 1,
        icons: ['burst-1'],
    },
    {
        product: 'first-born',
        slug: 'energy-pistol',
        name: 'Energy pistol',
        color: 'blue',
        size: 'sm',
        buy: 10,
        sell: 5,
        short: 2,
        medium: 2,
        icons: ['full-charge'],
    },
    {
        product: 'first-born',
        slug: 'machine-pistol',
        name: 'Machine pistol',
        color: 'blue',
        size: 'sm',
        buy: 12,
        sell: 6,
        short: 3,
        medium: 1,
    },
    {
        product: 'first-born',
        slug: 'officer-pistol-custom',
        name: "Officer's pistol custom",
        color: 'blue',
        size: 'sm',
        buy: 12,
        sell: 6,
        short: 2,
        medium: 2,
        long: 1,
        icons: ['burst-1'],
    },
    {
        product: 'first-born',
        slug: 'burst-vest',
        name: 'Burst vest',
        color: 'yellow',
        size: 'sm',
        buy: 14,
        sell: 8,
        armour: 1,
        description: ['rotating'],
        icons: ['effortless', 'flip', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'utility-knife',
        name: 'Utility knife',
        color: 'blue',
        size: 'sm',
        buy: 2,
        sell: 1,
        close: 1,
        throw: 1,
    },
    {
        product: 'first-born',
        slug: 'energy-combat-knife',
        name: 'Energy combat knife',
        color: 'blue',
        size: 'sm',
        buy: 4,
        sell: 2,
        close: 2,
        throw: 2,
    },
    {
        product: 'first-born',
        slug: 'short-sword-crafted',
        name: 'Short sword crafted',
        color: 'blue',
        size: 'sm',
        buy: 7,
        sell: 3,
        close: 2,
        heavy: 3,
        throw: 2,
    },
    {
        product: 'first-born',
        slug: 'hunter-trophy',
        name: "Hunter's trophy objective",
        color: 'brown',
        size: 'sm',
        icons: ['trophy'],
    },
    {
        product: 'first-born',
        slug: 'magnum-custom',
        name: 'Magnum custom',
        color: 'blue',
        size: 'sm',
        buy: 15,
        crystals: ['orange', 'green'],
        sell: 10,
        short: 3,
        medium: 2,
    },
    {
        product: 'first-born',
        slug: 'military-twin',
        name: 'Military twin',
        color: 'blue',
        size: 'sm',
        buy: 13,
        sell: 10,
        crystals: ['green'],
        short: 2,
        medium: 2,
        icons: ['burst-1'],
    },
    {
        product: 'first-born',
        slug: 'quell-riposte',
        name: "Quell's riposte",
        color: 'blue',
        size: 'sm',
        buy: 12,
        sell: 8,
        crystals: ['orange'],
        short: 2,
        close: 3,
        icons: ['burst-1'],
    },
    {
        product: 'first-born',
        slug: 'havoc-custom',
        name: 'Havoc custom',
        color: 'blue',
        size: 'sm',
        buy: 12,
        sell: 8,
        crystals: ['orange', 'green', 'green'],
        short: 3,
        icons: ['re-roll'],
    },
    {
        product: 'first-born',
        slug: 'combat-sword',
        name: 'Combat sword',
        color: 'blue',
        size: 'lg',
        buy: 4,
        sell: 2,
        short: 2,
        heavy: 3,
    },
    {
        product: 'first-born',
        slug: 'combat-rifle-custom',
        name: 'Combat rifle custom',
        color: 'blue',
        size: 'lg',
        buy: 8,
        sell: 4,
        short: 2,
        medium: 1,
        icons: ['reliable', 'burst-1'],
    },
    {
        product: 'first-born',
        slug: 'shock-rifle',
        name: 'Shock rifle',
        color: 'blue',
        size: 'lg',
        buy: 11,
        sell: 5,
        short: 3,
        medium: 1,
        icons: ['effortless-reload'],
    },
    {
        product: 'first-born',
        slug: 'breach-rifle',
        name: 'Breach rifle',
        color: 'blue',
        size: 'lg',
        buy: 37,
        sell: 21,
        short: 3,
        medium: 2,
        icons: ['burst-2'],
    },
    {
        product: 'first-born',
        slug: 'tactical-rifle',
        name: 'Tactical rifle',
        color: 'blue',
        size: 'md',
        buy: 32,
        sell: 14,
        short: 3,
        medium: 2,
        icons: ['burst-1', 'reliable'],
    },
    {
        product: 'first-born',
        slug: 'outland-gun',
        name: 'Outland gun',
        color: 'blue',
        size: 'md',
        buy: 22,
        sell: 10,
        crystals: ['orange', 'green'],
        short: 2,
        medium: 2,
        icons: ['burst-1', 'super-reliable'],
    },
    {
        product: 'first-born',
        slug: 'kalamite-fist',
        name: 'Kalamite fist',
        color: 'blue',
        size: 'md',
        buy: 12,
        sell: 10,
        crystals: ['green', 'green', 'green'],
        close: 3,
        heavy: 4,
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'outland-pistol-1',
        name: 'Outland pistol',
        color: 'blue',
        size: 'sm',
        buy: [0],
        sell: [0],
        short: 1,
    },
    {
        product: 'first-born',
        slug: 'outland-pistol-2',
        name: 'Outland pistol',
        color: 'blue',
        size: 'sm',
        buy: 2,
        sell: 1,
        short: 2,
    },
    {
        product: 'first-born',
        slug: 'jump-pack',
        name: 'Jump pack',
        color: 'orange',
        size: 'sm',
        buy: 5,
        sell: 4,
        scramble: [3, 5],
        icons: ['effortless', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'sensor-goggles',
        name: 'Sensor goggles',
        color: 'orange',
        size: 'sm',
        buy: 7,
        sell: 2,
        icons: ['effortless', 'search'],
    },
    {
        product: 'first-born',
        slug: 'medi-pack',
        name: 'Medi pack',
        color: 'orange',
        size: 'sm',
        buy: 3,
        sell: 1,
        heal: 4,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-shard',
        name: 'Shard',
        color: 'green',
        size: 'nano',
        sell: 2,
        throw: 3,
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'dyson-rod',
        name: 'Dyson rod',
        color: 'green',
        size: 'nano',
        sell: [3, 5, 10],
        description: ['dyson-rod'],
    },
    {
        product: 'first-born',
        slug: 'n-engram',
        name: 'Shift engram',
        color: 'green',
        size: 'nano',
        sell: 3,
        icons: ['effortless', 'pairs', 'flip'],
    },
    {
        product: 'first-born',
        slug: 'n-orb-5',
        name: 'Nano orb',
        color: 'green',
        size: 'nano',
        sell: 3,
        grenade: [5, 3, 1],
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 'n-orb-4',
        name: 'Nano orb',
        color: 'green',
        size: 'nano',
        sell: 3,
        grenade: [4, 3, 3],
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 's-heal',
        name: 'Health stim (S)',
        color: 'green',
        size: 'nano',
        sell: 3,
        super_heal: 2,
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 's-skill-2',
        name: 'Skill stim (S)',
        color: 'green',
        size: 'nano',
        sell: 3,
        super_skill: 2,
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 's-skill-3',
        name: 'Skill stim (S)',
        color: 'green',
        size: 'nano',
        sell: 4,
        super_skill: 3,
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 's-action-2',
        name: 'Action stim',
        color: 'green',
        size: 'nano',
        sell: 3,
        action: 2,
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 's-action-3',
        name: 'Action stim',
        color: 'green',
        size: 'nano',
        sell: 4,
        action: 3,
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 'raw-green',
        name: 'Raw minerals (Green)',
        color: 'green',
        size: 'nano',
        sell: 2,
        description: ['mineral'],
    },
    {
        product: 'first-born',
        slug: 'raw-orange',
        name: 'Raw minerals (Yellow)',
        color: 'green',
        size: 'nano',
        sell: 3,
        description: ['mineral'],
    },
    {
        product: 'first-born',
        slug: 'raw-purple',
        name: 'Raw minerals (Purple)',
        color: 'green',
        size: 'nano',
        sell: 6,
        description: ['mineral'],
    },
    {
        product: 'first-born',
        slug: 'n-event',
        name: 'Sypher orb',
        color: 'green',
        size: 'nano',
        icons: ['effortless', 'event', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-key',
        name: 'Key',
        color: 'green',
        size: 'nano',
        sell: 4,
        icons: ['key'],
    },
    {
        product: 'first-born',
        slug: 'n-freeze',
        name: 'Freeze blast',
        color: 'green',
        size: 'nano',
        sell: 2,
        freeze: [2, 2],
    },
    {
        product: 'first-born',
        slug: 'detonator-l',
        name: 'Detonator (L)',
        color: 'blue',
        size: 'nano',
        buy: 22,
        sell: 13,
        range: 'l',
        description: ['detonator'],
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'detonator-m',
        name: 'Detonator (M)',
        color: 'blue',
        size: 'nano',
        buy: 15,
        sell: 9,
        range: 'm',
        description: ['detonator'],
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'n-mine',
        name: 'Mine',
        color: 'blue',
        size: 'nano',
        buy: 4,
        sell: 1,
        explode: [5, 3, 1],
        description: ['mines'],
        icons: ['effortless', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-walkie',
        name: 'Walkie Talkie',
        color: 'orange',
        size: 'nano',
        buy: 5,
        sell: 3,
        icons: ['swap'],
    },
    {
        product: 'first-born',
        slug: 'n-ammo',
        name: 'Ammo',
        color: 'orange',
        size: 'nano',
        buy: 4,
        sell: 2,
        icons: ['ammo', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-reroll',
        name: 'Ranged Re-roll',
        color: 'orange',
        size: 'nano',
        buy: 18,
        sell: 11,
        icons: ['re-roll-ranged'],
    },
    {
        product: 'first-born',
        slug: 'n-action',
        name: 'Stim Actions',
        color: 'orange',
        size: 'nano',
        buy: 3,
        sell: 1,
        action: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-heal',
        name: 'Stim Heal',
        color: 'orange',
        size: 'nano',
        buy: 2,
        sell: 1,
        heal: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-skill',
        name: 'Stim Skill',
        color: 'orange',
        size: 'nano',
        buy: 4,
        sell: 1,
        skill: 2,
        icons: ['effortless', 'discard'],
    },
    {
        product: 'first-born',
        slug: 'n-target',
        name: 'Target laser',
        color: 'orange',
        size: 'nano',
        buy: 15,
        sell: 8,
        icons: ['target-lock'],
    },
    {
        product: 'first-born',
        slug: 'n-throw',
        name: 'Throwing knife',
        color: 'blue',
        size: 'nano',
        buy: 1,
        sell: 0,
        throw: 2,
        icons: ['effortless'],
    },
    {
        product: 'first-born',
        slug: 'n-nade',
        name: 'Grenade',
        color: 'blue',
        size: 'nano',
        buy: 5,
        sell: 4,
        grenade: [4, 3, 1],
        icons: ['discard'],
    },
    {
        product: 'first-born',
        slug: 'n-shield',
        name: 'Temporary shield',
        color: 'orange',
        size: 'nano',
        buy: 3,
        sell: 2,
        icons: ['effortless', 'temp-armour', 'discard'],
    },

    /* *** SHEET 2*** */

    {
        product: 'first-born',
        slug: 'ammo-box',
        name: 'Ammo box',
        color: 'orange',
        size: 'sm',
        description: ['rotating'],
        icons: ['ammo', 'discard'],
        buy: 5,
        sell: 2,
    },
    {
        product: 'first-born',
        slug: 'breach-pistol',
        name: 'Breach pistol',
        color: 'blue',
        size: 'sm',
        short: 3,
        medium: 2,
        icons: ['super-reliable'],
        crystals: ['orange', 'orange', 'green'],
        buy: 5,
        sell: 2,
    },
    {
        product: 'first-born',
        slug: 'combat-axe',
        name: 'Combat axe',
        color: 'blue',
        size: 'sm',
        close: 1,
        heavy: 3,
        throw: 2,
        buy: 4,
        sell: 2,
    },
    {
        product: 'first-born',
        slug: 'combat-knife-crafted',
        name: 'Combat knife crafted',
        color: 'blue',
        size: 'sm',
        close: 1,
        heavy: 2,
        throw: 2,
        buy: 4,
        sell: 2,
    },
    {
        product: 'first-born',
        slug: 'dyson-core',
        name: 'Dyson core',
        color: 'green',
        size: 'sm',
        icons: ['auto-close-hit', 'ignore-armour', 'discard'],
        sell: 11,
    },
    {
        product: 'first-born',
        slug: 'laser-cutter',
        name: 'Laser cutter',
        color: 'orange',
        size: 'sm',
        icons: ['breach'],
        buy: 4,
        sell: 2,
    },
    {
        product: 'first-born',
        slug: 'machine-rifle-grenade-launcher',
        name: 'Machine rifle grenade launcher',
        color: 'blue',
        size: 'md',
        range: 'm',
        short: 3,
        medium: 2,
        icons: ['grenade-launcher'],
        buy: 25,
        sell: 17,
    },
    {
        product: 'first-born',
        slug: 'marine-combat-suit',
        name: 'Marine combat suit',
        color: 'yellow',
        size: 'sm',
        armour: 1,
        icons: ['re-roll-ranged'],
        buy: 34,
        sell: 18,
    },
    {
        product: 'first-born',
        slug: 'marine-military-pistol',
        name: 'Marine military pistol',
        color: 'blue',
        size: 'sm',
        short: 3,
        medium: 1,
        icons: ['reliable'],
        buy: 14,
        sell: 8,
    },
    {
        product: 'first-born',
        slug: 'medi-stim',
        name: 'Medi stim',
        color: 'orange',
        size: 'sm',
        heal: 2,
        icons: ['effortless', 'discard'],
        buy: [0],
        sell: [0],
    },
    {
        product: 'first-born',
        slug: 'n-phase',
        name: 'Phase engram',
        color: 'yellow',
        size: 'nano',
        armour: 1,
        buy: 11,
        sell: 9,
        crystals: ['purple'],
    },
    {
        product: 'first-born',
        slug: 'n-timewarp',
        name: 'Timewarp',
        color: 'blue',
        size: 'nano',
        icons: ['timewarp', 'discard'],
        buy: 7,
        sell: 5,
    },
    {
        product: 'first-born',
        slug: 'objective',
        name: 'Objective',
        color: 'green',
        size: 'nano',
        icons: ['objective'],
    },
    {
        product: 'first-born',
        slug: 'repeat-pistol',
        name: 'Repeat pistol',
        color: 'blue',
        size: 'sm',
        short: 3,
        icons: ['ammo-returns'],
        buy: 35,
        sell: 21,
        crystals: ['purple', 'orange', 'green'],
    },
    {
        product: 'first-born',
        slug: 's-ammo',
        name: 'Accelerant ammo',
        color: 'orange',
        size: 'nano',
        icons: ['super-ammo', 'discard'],
        sell: 3,
        crystals: ['orange'],
    },
    {
        product: 'first-born',
        slug: 'shock-tonfa-compact',
        name: 'Shock tonfa compact',
        color: 'blue',
        size: 'md',
        close: 2,
        heavy: 4,
        buy: 14,
        sell: 9,
    },
    {
        product: 'first-born',
        slug: 'smart-shot-energy-rifle',
        name: 'Smart shot energy rifle',
        color: 'blue',
        size: 'md',
        short: 3,
        medium: 2,
        icons: ['target-lock', 'full-charge'],
        buy: 23,
        sell: 10,
        crystals: ['green'],
    },
    {
        product: 'first-born',
        slug: 'sneak-pistol',
        name: 'Sneak pistol',
        color: 'blue',
        size: 'sm',
        short: 2,
        medium: 2,
        long: 1,
        icons: ['silent'],
        buy: 10,
        sell: 4,
    },
    {
        product: 'first-born',
        slug: 'tactical-bracers',
        name: 'Tactical bracers',
        color: 'blue',
        size: 'md',
        close: 3,
        short: 3,
        medium: 1,
        icons: ['effortless'],
        buy: 24,
        sell: 15,
        crystals: ['orange'],
    },

    /* *** SHEET 3 *** */
    {
        product: 'first-born',
        slug: 'caaligorn-hunt-rifle',
        name: 'Caaligorn hunt rifle',
        color: 'blue',
        size: 'lg',
        short: 3,
        medium: 3,
        long: 3,
        description: ['caaligorn'],
        icons: ['super-reliable'],
        sell: 24,
    },
    {
        product: 'first-born',
        slug: 'dialena-shard-guard',
        name: 'Dialena shard guard',
        color: 'green',
        size: 'md',
        close: 3,
        armour: 2,
        sell: 12,
        crystals: ['purple', 'purple'],
    },
    {
        product: 'first-born',
        slug: 'dyson-vent-8',
        name: 'Dyson vent',
        color: 'green',
        size: 'sm',
        icons: ['dyson', 'dyson-range'],
        sell: 14,
    },
    {
        product: 'first-born',
        slug: 'iconoclast-shard-sword',
        name: 'Iconoclast shard sword',
        color: 'green',
        size: 'md',
        close: 3,
        icons: ['ignore-shield'],
        sell: 12,
    },
    {
        product: 'first-born',
        slug: 'mantle-armour',
        name: 'Mantle armour',
        color: 'green',
        size: 'sm',
        shield: 3,
        icons: ['flip'],
        sell: 21,
    },
    {
        product: 'first-born',
        slug: 'potent-fibril',
        name: 'Potent fibril',
        color: 'green',
        size: 'md',
        icons: ['repair'],
        sell: 20,
    },
    {
        product: 'first-born',
        slug: 'velocity-bond',
        name: 'Velocity bond',
        color: 'green',
        size: 'sm',
        move: 2,
        sell: 14,
    },
]

export default tokens
