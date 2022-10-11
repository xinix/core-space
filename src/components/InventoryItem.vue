<script lang="ts" setup>
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
                <dt v-if="item.buy">Buy:</dt>
                <dd v-if="item.buy">{{ item.buy }}</dd>
                <dt v-if="item.sell">Sell:</dt>
                <dd v-if="item.sell">{{ item.sell }}</dd>
            </dl>
        </header>
        <div v-if="active" class="more">
            <pre><code>{{ item }}</code></pre>
        </div>
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
        background-color: rgba(0, 0, 0, 0.5);
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
            margin-bottom: 0.125em;
            text-align: left;
        }
    }

    h3 {
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }
}
</style>
