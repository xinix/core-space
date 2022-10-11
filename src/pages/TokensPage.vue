<script lang="ts" setup>
import InventoryItem from '@/components/InventoryItem.vue'
import { TokenType } from '@/tokens/types'
import { computed } from 'vue'

const props = defineProps<{ items: TokenType[]; q: string }>()
const emit = defineEmits(['clear'])
const qSummary = computed(
    () => `Search results for: <strong>${props.q}</strong>`
)
const onClear = (ev: MouseEvent) => {
    emit('clear')
    return ev
}
</script>

<template>
    <section class="container">
        <p v-if="q" class="summary">
            <span v-html="qSummary" />
            <button class="btn-link" type="button" @click="onClear">
                Clear filter
            </button>
        </p>

        <transition-group class="tokens" name="list" tag="div">
            <InventoryItem
                v-for="item in items"
                :key="item.slug"
                :item="item"
                class="item"
            />
        </transition-group>
    </section>
</template>

<style lang="scss">
.tokens {
    display: flex;
    flex-wrap: wrap;
}

.summary {
    margin: 0.5em 1em;
}

/* transition: list */
/* moving */
.list-move {
    transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.list-enter-active {
    transition: all 300ms ease-out;
}

/* disappearing */
.list-leave-active {
    position: absolute;
    z-index: 0;
    transition: all 200ms ease-in;
}

/* appear at / disappear to */
.list-enter,
.list-leave-to {
    opacity: 0;
}
</style>
