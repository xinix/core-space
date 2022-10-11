<script lang="ts" setup>
import InventoryItem from '@/components/InventoryItem.vue'
import tokens from '@/tokens'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ q?: string }>(), { q: '' })

const items = computed(() => {
    let q = props.q
    if (q != undefined) {
        q = q.toLowerCase().trim()
        if (q != '') {
            return tokens
                .filter((a) => a.name.toLowerCase().indexOf(q as string) >= 0)
                .sort((a, b) => a.name.localeCompare(b.name))
        }
    }
    return tokens.sort((a, b) => a.name.localeCompare(b.name))
})
</script>

<template>
    <section class="tokens">
        <transition-group name="list">
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
