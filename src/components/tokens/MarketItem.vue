<template>
    <div :class="itemClass" class="market-item" tabindex="-1" @click="onClick">
        <figure :class="tokenClass" class="token"></figure>

        <div class="stock">
            <StockDot
                v-for="i in item.count"
                :key="i"
                :count="i"
                :sold="item.sold"
            />
        </div>

        <h3 class="name">{{ item.name }}</h3>
        <span v-if="item.color !== 'teal'" class="price">
            {{ item.buy }} &rarr; {{ item.sell }}
        </span>

        <div class="overlay">
            <button v-if="canBuy" class="btn" type="button" @click="onBuy">
                {{ $t('buy') }}
            </button>
            <button v-if="canSell" class="btn" type="button" @click="onSell">
                {{ $t('sell') }}
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import StockDot from '@/components/tokens/StockDot.vue'

import { CoreSpaceToken, SIZE_ENUM } from '@/tokens/types'
import { computed } from 'vue'
import { useTokens } from '@/stores/tokens'

const props = defineProps<{ item: CoreSpaceToken; active: boolean }>()
const emit = defineEmits(['activate'])

const tokens = useTokens()

const onClick = (ev: MouseEvent) => {
    emit('activate', props.item.key)
    return ev
}

const onBuy = (ev: MouseEvent) => {
    ev.cancelBubble = true
    tokens.buy(props.item)
    emit('activate')
    return ev
}

const onSell = (ev: MouseEvent) => {
    ev.cancelBubble = true
    tokens.sell(props.item)
    emit('activate')
    return ev
}

const tokenClass = computed(() => {
    const cls: any = {}
    const size = SIZE_ENUM[props.item.size]
    cls[props.item.product] = true
    cls[size] = true
    cls[props.item.slug] = true
    return cls
})

const itemClass = computed(() => {
    let soldout = false
    if (props.item.sold != undefined) {
        soldout = props.item.sold >= props.item.count
    }
    return { soldout, active: props.active }
})

const canBuy = computed(
    () => props.item.sold != undefined && props.item.sold < props.item.count
)

const canSell = computed(() => true)
</script>

<style lang="scss" scoped>
.market-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 7rem;
    padding: 0.5em;
    cursor: pointer;
    transition: transform 0.2s ease-out, background-color 0.2s ease,
        box-shadow 0.2s ease-in;
    border-radius: 0.5em;
    background-color: var(--transparent-bg);
    box-shadow: var(--shadow-md);
    gap: 0.25em;

    &.soldout {
        opacity: 0.75;

        figure {
            filter: grayscale(100%);
        }
    }

    h3 {
        font-size: 1.125em;
        font-weight: bold;
        max-width: fit-content;
        text-transform: uppercase;
        text-overflow: ellipsis;
    }

    &:active,
    &:hover {
        transform: scale(1.05);
    }
}

.stock {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 7rem;
    margin: 0.125em 0;
    gap: 0.25em;
}

.market-item.active .overlay {
    transform: scale(1);
    opacity: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0.5em;
    transition: all 0.3s ease;
    transform: scale(0);
    opacity: 0;
    color: var(--dark-color);
    border-radius: 0.5em;
    background-color: var(--transparent-bg);

    .btn {
        align-items: center;
        flex: 1;
        justify-content: center;

        &:active,
        &:hover {
            transform: scale(1);
            text-decoration: underline;
        }
    }

    .btn + .btn {
        border-top: solid 3px var(--dark-color);
    }
}
</style>
