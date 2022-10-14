<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'
import { computed, watch } from 'vue'
import { useTokens } from '@/stores/tokens'
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{ slug?: string; q?: string }>(), {
    slug: '',
    q: '',
})

const tokens = useTokens()
tokens.search(props.q)
tokens.activate(props.slug)

watch(
    () => props.slug,
    (slug) => tokens.activate(slug)
)
watch(
    () => props.q,
    (q) => tokens.search(q)
)

const qSummary = computed(
    () => `Search results for: <strong>${tokens.q}</strong>`
)
const onClear = (ev: MouseEvent) => {
    tokens.clearQ()
    return ev
}

const router = useRouter()
const onBack = (ev: MouseEvent) => {
    if (window.history.length > 2) {
        router.back()
    } else {
        router.push('/')
    }
    return ev
}
</script>

<template>
    <section class="container">
        <p v-if="slug" class="summary">
            <button class="btn" type="button" @click="onBack">
                <span class="material-symbols-rounded icon">arrow_back</span>
                <span>{{ $t('back') }}</span>
            </button>
        </p>
        <p v-else-if="tokens.q" class="summary">
            <span v-html="qSummary" />
            <button class="btn-link" type="button" @click="onClear">
                {{ $t('clear_filter') }}
            </button>
        </p>

        <transition-group class="tokens" name="list" tag="div">
            <TokenDetails
                v-for="item in tokens.items"
                :key="item.slug"
                :active="item.slug === slug"
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
