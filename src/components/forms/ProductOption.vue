<script lang="ts" setup>
import { ProductType } from '@/tokens/types'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        tag?: string
        option: ProductType
        selected: ProductType[]
    }>(),
    { tag: 'div' }
)

const emit = defineEmits(['select'])

const buyNow = {
    'core-space': 'https://battlesystems.co.uk/product/core-space-starter-set/',
    'first-born':
        'https://battlesystems.co.uk/product/core-space-first-born-starter-set/',
    'fury': 'https://battlesystems.co.uk/product/core-space-fury-of-the-insane-god-expansion/',
    'line-of-fire':
        'https://battlesystems.co.uk/product/core-space-in-the-line-of-fire-expansion/',
    'rysa': 'https://battlesystems.co.uk/product/core-space-gates-of-rysa-expansion/',
    'trading-post-5':
        'https://battlesystems.co.uk/product/core-space-trading-post-5-expansion/',
    'utility':
        'https://battlesystems.co.uk/product/core-space-utility-dashboards/',
}

const productClass = computed(() => {
    const result: any = {
        active: props.selected.indexOf(props.option) >= 0,
    }
    result[props.option] = true
    return result
})

const onSelect = (ev: MouseEvent) => {
    emit('select', props.option)
    return ev
}
</script>

<template>
    <component :is="tag" :class="productClass" class="product-option">
        <div class="container" @click="onSelect">
            <section class="image">
                <figure></figure>
                <span class="checkbox material-symbols-rounded">done</span>
            </section>
            <strong class="name">{{ $t(option) }}</strong>
        </div>
        <a :href="buyNow[option]" class="buy-now" target="_blank">
            <span class="material-symbols-rounded">shopping_cart</span>
            <span>{{ $t('buy-now') }}</span>
        </a>
    </component>
</template>

<style lang="scss" scoped>
.product-option {
    display: grid;
    grid-gap: 1em 1em;

    .container {
        display: grid;
        cursor: pointer;
        transition: all 0.2s ease-out;
        opacity: 0.5;
        grid-gap: 1em 1em;

        &:active,
        &:hover {
            transform: scale(1.05);
            opacity: 0.8;

            .image:before {
                box-shadow: var(--radiant);
            }
        }
    }

    &.active .container {
        opacity: 1;

        .image {
            filter: grayscale(0) blur(0);

            &:before {
                box-shadow: var(--radiant);
            }

            .checkbox {
                transform: translateY(0);
                opacity: 0.9;
                background-color: var(--primary);
            }
        }
    }

    .name {
        font-size: 125%;
        justify-self: center;
    }

    .image {
        position: relative;
        align-self: center;
        width: 85%;
        height: 85%;
        padding: 1em;
        transition: all 0.1s ease-out;
        filter: grayscale(100%) blur(1px);
        justify-self: center;

        &:before {
            position: absolute;
            z-index: -1;
            top: calc(50% - 2em);
            left: calc(50% - 3em);
            width: 6em;
            height: 4em;
            content: '';
            transition: all 0.1s ease-out;
            border-radius: 100%;
        }

        .checkbox {
            font-size: 2.5em;
            position: absolute;
            top: 1.5em;
            left: 50%;
            margin-left: -0.5em;
            transition: all 0.2s ease-in;
            transform: translateY(-1em);
            opacity: 0;
            border-radius: 100%;
            background-color: transparent;
        }

        figure {
            width: 100%;
            height: 9em;
            background-color: transparent;
            background-position: center center;
            background-size: contain;
        }
    }
}

.buy-now {
    font-size: 100%;
    font-weight: bold;
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-top: 1em;
    padding: 0.325em 0.75em;
    transition: all 0.2s ease-out;
    text-decoration: none;
    opacity: 0.75;
    color: var(--link-color);
    justify-self: center;

    span:nth-child(1) {
        font-size: 200%;
        transition: all 0.2s ease-in;
    }

    span:nth-child(2) {
        position: absolute;
        transition: all 0.2s ease-in;
        transform: scale(-1, 1);
        opacity: 0;
    }

    &:active,
    &:hover {
        transform: scale(1.1);
        opacity: 1;

        span:nth-child(1) {
            transform: translateX(-1em) scale(-1, 1);
        }

        span:nth-child(2) {
            transform: translateX(1em) scale(1, 1);
            opacity: 1;
        }
    }
}

.product-option.core-space figure {
    background-image: var(--core-space);
}

.product-option.first-born figure {
    background-image: var(--first-born);
}

.product-option.fury figure {
    background-image: var(--fury);
}

.product-option.line-of-fire figure {
    background-image: var(--line-of-fire);
}

.product-option.rysa figure {
    background-image: var(--rysa);
}

.product-option.trading-post-5 figure {
    background-image: var(--trading-post-5);
}

.product-option.utility figure {
    background-image: var(--utility);
}
</style>
