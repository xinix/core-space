<script lang="ts" setup>
import { ProductType } from '@/tokens/types'
import { computed } from 'vue'
import { useProducts } from '@/stores/products'

const props = withDefaults(
    defineProps<{
        tag?: string
        option: ProductType
        selected: ProductType[]
    }>(),
    { tag: 'div' }
)

const products = useProducts()

const emit = defineEmits(['select'])

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

const onClickBuy = (ev: MouseEvent) => {
    ev.stopPropagation()
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
            <header class="product">
                <strong class="name">{{ $t(option) }}</strong>
            </header>
        </div>
        <a
            :href="products.getBuyNowLink(option)"
            class="buy-now"
            target="_blank"
            @click="onClickBuy"
        >
            <span class="material-symbols-rounded">shopping_cart</span>
            <span>{{ $t('buy-now') }}</span>
        </a>
    </component>
</template>

<style lang="scss" scoped>
.product-option {
    position: relative;
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
                color: var(--primary);
                background-color: black;
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

.product {
    position: relative;
    display: flex;
    text-align: center;

    .name {
        flex: 1;
    }
}

.buy-now {
    font-size: 80%;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
    display: inline-flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 3em;
    margin: 1em;
    padding: 0.6em 0.75em;
    transition: all 0.2s ease-in;
    text-decoration: none;
    color: var(--link-contrast);
    border-radius: 3em;
    background-color: var(--link-color);
    justify-self: center;

    span:nth-child(1) {
        font-size: 150%;
        transition: all 0.2s ease-in;
    }

    span:nth-child(2) {
        width: 0;
        transition: transform 0.2s ease-in;
        transform: translateX(1em) scale(0, 1);
        white-space: nowrap;
        opacity: 0;
    }

    &:active,
    &:hover {
        width: 75%;

        span:nth-child(1) {
            font-size: 150%;
        }

        span:nth-child(2) {
            width: auto;
            padding: 0 0.75em;
            transform: translateX(0) scale(1, 1);
            opacity: 1;
        }
    }
}

.product-option.core-space figure {
    background-image: var(--core-space);
}

.product-option.zed figure {
    background-image: var(--zed);
}

.product-option.galactic-corps figure {
    background-image: var(--galactic-corps);
}

.product-option.purge-outbreak figure {
    background-image: var(--purge-outbreak);
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
