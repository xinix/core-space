<script lang="ts" setup>
import IconLegend from '@/components/tokens/IconLegend.vue'
import JustText from '@/components/tokens/JustText.vue'
import BuyWithCrystals from '@/components/tokens/BuyWithCrystals.vue'

import { AttributeType, CoreSpaceToken, SIZE_ENUM } from '@/tokens/types'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{ item: CoreSpaceToken; active?: boolean }>(),
    { active: false }
)

const tag = computed(() => (props.active ? 'div' : 'router-link'))

const wrapperClass = computed(() => {
    const cls: any = {
        active: props.active,
    }
    const size = SIZE_ENUM[props.item.size]
    cls[size] = true
    cls[props.item.color] = true
    return cls
})

const tokenClass = computed(() => {
    const cls: any = {}
    const size = SIZE_ENUM[props.item.size]
    cls[props.item.product] = true
    cls[size] = true
    cls[props.item.slug] = true
    return cls
})

const mustacheIcons = computed(() => {
    const icons: { key: AttributeType; value: any; icon?: AttributeType }[] = [
        { key: 'phase', value: props.item.phase },
        { key: 'close', value: props.item.close },
        { key: 'heavy', value: props.item.heavy },
        { key: 'short', value: props.item.short, icon: 'range' },
        { key: 'medium', value: props.item.medium, icon: 'range' },
        { key: 'long', value: props.item.long, icon: 'range' },
        { key: 'throw', value: props.item.throw },
        { key: 'grenade', value: props.item.grenade },
        { key: 'armour', value: props.item.armour, icon: 'physical_armour' },
        { key: 'blue-armour', value: props.item.blue_armour },
        { key: 'blue-armour-regen', value: props.item.blue_armour_regen },
        { key: 'shield', value: props.item.shield, icon: 'shield_armour' },
        { key: 'dyson', value: props.item.dyson },
        { key: 'move', value: props.item.move },
        { key: 'scramble', value: props.item.scramble },
        { key: 'stim-heal', value: props.item.heal },
        { key: 'stim-heal-plus', value: props.item.super_heal },
        { key: 'stim-skill', value: props.item.skill },
        { key: 'stim-skill-plus', value: props.item.super_skill },
        { key: 'stim-combat', value: props.item.action },
        { key: 'freeze', value: props.item.freeze },
        { key: 'explode', value: props.item.explode },
        { key: 'scatter-core', value: props.item.scatter, icon: 'scatter' },
    ]
    return icons.filter((x) => x.value != undefined)
})
</script>

<template>
    <component
        :is="tag"
        :class="wrapperClass"
        :to="`/item/${item.key}`"
        class="token-details"
        tabindex="-1"
    >
        <figure :class="tokenClass" class="token" />
        <header class="title">
            <h3>{{ item.name }}</h3>
            <dl v-if="active" class="dl">
                <dt v-if="item.buy">{{ $t('buy') }}:</dt>
                <dd v-if="item.buy">{{ item.buy }}</dd>
                <dt v-if="item.sell">{{ $t('sell') }}:</dt>
                <dd v-if="item.sell">{{ item.sell }}</dd>
                <dt v-if="item.range">{{ $t('range') }}:</dt>
                <dd v-if="item.range">{{ $t(item.range) }}</dd>
            </dl>
        </header>
        <section v-if="active" class="more">
            <ul v-if="item.description" class="list">
                <JustText
                    v-for="attr in item.description"
                    :key="attr"
                    :attribute="attr"
                    tag="li"
                />
            </ul>

            <ul v-if="mustacheIcons.length > 0 || item.icons" class="list">
                <IconLegend
                    v-for="snor in mustacheIcons"
                    :key="snor.key"
                    :icon="snor.icon ?? snor.key"
                    :legend="snor.key"
                    :mustache="snor.value"
                    tag="li"
                />
                <IconLegend
                    v-for="icon in item.icons"
                    :key="icon"
                    :icon="icon"
                    tag="li"
                />
            </ul>
            <ul v-if="item.crystals" class="list">
                <BuyWithCrystals
                    v-if="item.crystals"
                    :buy="item.buy"
                    :crystals="item.crystals"
                    :name="item.name"
                    :sell="item.sell"
                    tag="li"
                />
            </ul>
        </section>
    </component>
</template>

<style lang="scss" scoped>
.token-details {
    display: grid;
    margin: 0.5em;
    padding: 0.75em;
    transition: transform 0.2s ease-out, background-color 0.2s ease,
        box-shadow 0.2s ease-in;
    text-decoration: none;
    color: inherit;
    grid-row-gap: 0.5em;

    &:not(.active) {
        justify-content: center;
        min-width: 7rem;
        cursor: pointer;
        border-radius: 0.5em;
        background-color: var(--transparent-bg);
        box-shadow: var(--shadow-md);

        &:active,
        &:hover {
            transform: scale(1.05);
            color: var(--primary-contrast);
            background-color: var(--primary-transparent);
        }

        &.brown:hover {
            box-shadow: var(--glow-brown);
        }

        &.blue:hover {
            box-shadow: var(--glow-blue);
        }

        &.orange:hover {
            box-shadow: var(--glow-orange);
        }

        &.yellow:hover {
            box-shadow: var(--glow-yellow);
        }

        &.green:hover {
            box-shadow: var(--glow-green);
        }

        &.white:hover {
            box-shadow: var(--glow-white);
        }

        &.purple:hover {
            box-shadow: var(--glow-purple);
        }

        &.lime:hover {
            box-shadow: var(--glow-lime);
        }

        &.violet:hover {
            box-shadow: var(--glow-violet);
        }

        &.teal:hover {
            box-shadow: var(--glow-teal);
        }
    }

    &.active {
        position: relative;
        flex: 1;
        max-width: 900px;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem 1rem;
        grid-template-areas:
            'token title'
            'more  more';

        header {
            font-size: 1.25em;
        }

        .token {
            grid-area: token;
        }

        .title {
            grid-area: title;
        }

        .more {
            grid-area: more;
        }

        h3 {
            font-size: 2em;
            max-width: available;
            margin-bottom: 0.125em;
            text-align: left;
        }

        &.brown .more {
            box-shadow: var(--glow-brown);
        }

        &.blue .more {
            box-shadow: var(--glow-blue);
        }

        &.orange .more {
            box-shadow: var(--glow-orange);
        }

        &.yellow .more {
            box-shadow: var(--glow-yellow);
        }

        &.green .more {
            box-shadow: var(--glow-green);
        }

        &.white .more {
            box-shadow: var(--glow-white);
        }

        &.purple .more {
            box-shadow: var(--glow-purple);
        }

        &.lime .more {
            box-shadow: var(--glow-lime);
        }

        &.violet .more {
            box-shadow: var(--glow-violet);
        }

        &.teal .more {
            box-shadow: var(--glow-teal);
        }
    }

    h3 {
        font-size: 1.125em;
        font-weight: bold;
        max-width: fit-content;
        text-transform: uppercase;
        text-overflow: ellipsis;
    }
}

.more {
    align-self: flex-start;
    border-radius: 0.5em;
    background-color: var(--transparent-bg);
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(5px);
}

.list {
    font-size: 1.25em;
    margin: 1em;
    list-style: none;
}

.list + .list,
.list li + li {
    margin-top: 1em;
    padding-top: 1em;
    border-top: inset 3px var(--primary-transparent);
}

@media (max-width: 600px) {
    .token-details.active {
        margin: 0;
        padding: 0.325em;

        .more {
            padding: 0.5em;
            background-color: transparent;

            .list {
                margin: 0;
            }
        }

        &.brown .more,
        &.blue .more,
        &.orange .more,
        &.yellow .more,
        &.green .more,
        &.white .more,
        &.purple .more,
        &.lime .more,
        &.violet .more,
        &.teal .more {
            box-shadow: none;
        }
    }
    .token-details.active.md,
    .token-details.active.lg,
    .token-details.active.xl,
    .token-details.active.ulg {
        grid-template-columns: 1fr;
        grid-template-areas:
            'token'
            'title'
            'more';

        .token {
            justify-self: center;
        }
    }
}

@media (min-width: 1000px) {
    .token-details.active {
        max-width: 1400px;
        grid-template-columns: minmax(5em, 1fr) 3fr;
        grid-template-rows: min-content 1fr;

        grid-template-areas:
            'title more'
            'token more';

        .token.xl {
            position: absolute;
            transform: scale(0.65) translateX(-25%);
        }
    }
}
</style>
