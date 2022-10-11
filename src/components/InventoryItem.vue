<script lang="ts" setup>
import { TokenType } from '@/tokens/types'
import { computed } from 'vue'

const props = defineProps<{ item: TokenType }>()
const tokenClass = computed(() => {
    const cls: any = {}
    cls[props.item.product] = true
    cls[props.item.size] = true
    cls[props.item.slug] = true
    return cls
})
</script>

<template>
    <div class="inventory-item">
        <figure :class="tokenClass" class="token" />
        <h3>{{ item.name }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.inventory-item {
    display: grid;
    margin: 0.5em;
    padding: 0.75em;
    cursor: pointer;
    transition: transform 0.2s ease-out, background-color 0.2s ease;
    border-radius: 0.5em;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: var(--shadow-md);
    grid-row-gap: 0.5em;

    h3 {
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }

    &:active,
    &:hover {
        transform: scale(1.1);
        color: var(--primary-contrast);
        background-color: var(--primary-transparent);
    }
}
</style>
