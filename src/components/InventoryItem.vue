<script lang="ts" setup>
import IconDescription from '@/components/IconDescription.vue'
import AttributeDescription from '@/components/AttributeDescription.vue'

import { TokenType } from '@/tokens/types'
import { computed } from 'vue'

const props = defineProps<{ item: TokenType; active: boolean }>()
const emit = defineEmits(['select'])

const tokenClass = computed(() => {
    const cls: any = {}
    cls[props.item.product] = true
    cls[props.item.size] = true
    cls[props.item.slug] = true
    return cls
})

const onSelect = (ev: MouseEvent) => {
    emit('select', props.item)
    return ev
}
</script>

<template>
    <div
        :class="{ active }"
        class="inventory-item"
        tabindex="-1"
        @click="onSelect"
    >
        <figure :class="tokenClass" class="token" />
        <header class="title">
            <h3>{{ item.name }}</h3>
            <dl v-if="active" class="dl">
                <dt v-if="item.buy">{{ $t('buy') }}:</dt>
                <dd v-if="item.buy">{{ item.buy }}</dd>
                <dt v-if="item.sell">{{ $t('sell') }}:</dt>
                <dd v-if="item.sell">{{ item.sell }}</dd>
            </dl>
        </header>
        <section v-if="active" class="more">
            <ul v-if="item.description" class="list">
                <AttributeDescription
                    v-for="attr in item.description"
                    :key="attr"
                    :attribute="attr"
                    tag="li"
                />
            </ul>

            <ul v-if="item.icons" class="list">
                <IconDescription
                    v-for="icon in item.icons"
                    :key="icon"
                    :icon="icon"
                    tag="li"
                />
            </ul>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.inventory-item {
    display: grid;
    margin: 0.5em;
    padding: 0.75em;
    transition: transform 0.2s ease-out, background-color 0.2s ease;
    grid-row-gap: 0.5em;

    &:not(.active) {
        cursor: pointer;
        border-radius: 0.5em;
        background-color: var(--transparent-bg);
        box-shadow: var(--shadow-md);

        &:active,
        &:hover {
            transform: scale(1.1);
            color: var(--primary-contrast);
            background-color: var(--primary-transparent);
        }
    }

    &.active {
        flex: 1;
        max-width: 900px;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem 1rem;
        grid-template-areas:
            'pic title'
            'more more';

        header {
            font-size: 1.25em;
        }

        .pic {
            grid-area: pic;
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
    border-radius: 0.5em;
    background-color: var(--header-bg);
    box-shadow: var(--shadow-md);
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
</style>
