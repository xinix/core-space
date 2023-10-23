<template>
    <div class="container" tabindex="-1" @keyup.esc="onClear">
        <main class="details">
            <header>
                <h1>{{ $t(slug) }}</h1>
                <p class="lead" v-html="$t(infoText)" />
            </header>

            <BusyLoading v-if="loading" />

            <p v-else-if="items && items.length === 0" class="empty">
                <em>🥹</em>
                <br />
                <br />
                {{ $t('no_result') }}
            </p>

            <div v-if="items !== undefined" class="tokens">
                <MarketItem
                    v-for="item in items"
                    :key="item.key"
                    :active="activeToken === item.key"
                    :item="item"
                    class="item"
                    @activate="onToggle"
                />
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import MarketItem from '@/components/tokens/MarketItem.vue'
import BusyLoading from '@/components/app/BusyLoading.vue'

import { computed, ref, watchEffect } from 'vue'
import { CoreSpaceToken, TradingPost } from '@/tokens/types'
import { useTokens } from '@/stores/tokens'
import { useCoreSpaceTokens } from '@/use/core-space-tokens'

const onClear = (ev: any) => {
    onToggle()
    return ev
}

const props = defineProps<{ slug: TradingPost }>()

const tokens = useTokens()
const activeToken = ref('')

const onToggle = (slug = '') => {
    activeToken.value = slug
}

watchEffect(() => {
    tokens.visit(props.slug)
})

const infoText = computed(() => `${props.slug}-info`)
const { loading } = useCoreSpaceTokens()
const items = ref<CoreSpaceToken[]>()
items.value = tokens.market
</script>

<style lang="scss" scoped>
.container {
    padding-bottom: 50vh;
}

.details {
    header {
        margin-bottom: 2rem;
    }

    .lead {
        margin: 1rem 0;
        line-height: 1.7;
        font-size: 120%;
    }
}

.tokens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0.75em;

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

@media (max-width: 600px) {
    .details header {
        padding: 0 1rem;
    }
}
</style>
