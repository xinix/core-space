<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'

import { computed } from 'vue'
import { useTokens } from '@/stores/tokens'

const tokens = useTokens()

const qSummary = computed(
    () => `Search results for: <strong>${tokens.q}</strong>`
)

const onClear = (ev: MouseEvent) => {
    tokens.q = ''
    return ev
}
</script>

<template>
    <section class="container">
        <p v-if="tokens.q" class="summary">
            <span v-html="qSummary" />
            <button class="btn-link" type="button" @click="onClear">
                {{ $t('clear_filter') }}
            </button>
        </p>

        <p v-if="tokens.items.length === 0" class="empty">
            <em>🥹</em>
            <br />
            <br />
            {{ $t('no_result') }}
        </p>

        <transition-group
            :class="{ 'with-q': tokens.q !== '' }"
            class="tokens"
            name="list"
            tag="div"
        >
            <TokenDetails
                v-for="item in tokens.items"
                :key="item.key"
                :item="item"
                class="item"
            />
        </transition-group>
    </section>
</template>

<style lang="scss" scoped>
.container {
    padding-bottom: 50vh;
}

.tokens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &.with-q {
        justify-content: center;
    }
}

.empty {
    font-size: 1.5em;
    line-height: 1.4;
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;

    em {
        font-size: 3em;
        font-style: normal;
    }
}

.summary {
    margin: 1em;
    text-align: center;
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
