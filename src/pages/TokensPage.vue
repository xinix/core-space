<script lang="ts" setup>
import TokenDetails from '@/components/TokenDetails.vue'
import { TokenType } from '@/tokens/types'
import { computed } from 'vue'

const props = defineProps<{
    items: TokenType[]
    q: string
    activeSlug: string
}>()
const emit = defineEmits(['back', 'clear', 'select'])
const qSummary = computed(
    () => `Search results for: <strong>${props.q}</strong>`
)
const onClear = (ev: MouseEvent) => {
    emit('clear')
    return ev
}
const onSelect = (item: TokenType) => {
    emit('select', item)
}

const onBack = (ev: MouseEvent) => {
    emit('back')
    return ev
}
</script>

<template>
    <section class="container">
        <p v-if="activeSlug" class="summary">
            <button class="btn" type="button" @click="onBack">
                <span class="material-symbols-rounded icon">arrow_back</span>
                <span>{{ $t('back') }}</span>
            </button>
        </p>
        <p v-else-if="q" class="summary">
            <span v-html="qSummary" />
            <button class="btn-link" type="button" @click="onClear">
                {{ $t('clear_filter') }}
            </button>
        </p>

        <transition-group class="tokens" name="list" tag="div">
            <TokenDetails
                v-for="item in items"
                :key="item.slug"
                :active="item.slug === activeSlug"
                :item="item"
                class="item"
                @select="onSelect"
            />
        </transition-group>
    </section>
</template>

<style lang="scss">
.tokens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
