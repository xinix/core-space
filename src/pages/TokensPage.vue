<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'
import BusyLoading from '@/components/app/BusyLoading.vue'

import { useCoreSpaceTokens } from '@/use/core-space-tokens'

const { loading, items, qSummary, containerClass, onClear } =
    useCoreSpaceTokens()
</script>

<template>
    <section class="container">
        <p v-if="qSummary" class="summary">
            <span v-html="qSummary" />
            <button class="btn-link" type="button" @click="onClear">
                {{ $t('clear_filter') }}
            </button>
        </p>

        <BusyLoading v-if="loading" />

        <p v-else-if="items && items.length === 0" class="empty">
            <em>🥹</em>
            <br />
            <br />
            {{ $t('no_result') }}
        </p>

        <div :class="containerClass" class="tokens">
            <TokenDetails
                v-for="item in items"
                :key="item.key"
                :item="item"
                class="item"
            />
        </div>
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

    &:focus {
        outline: none;
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
