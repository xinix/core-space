<script lang="ts" setup>
import { CrystalType } from '@/tokens/types'

withDefaults(
    defineProps<{
        tag?: string
        name: string
        buy?: number | number[]
        sell?: number | number[]
        crystals: CrystalType[]
    }>(),
    { tag: 'div', buy: -1, sell: -1 }
)
</script>

<template>
    <component :is="tag">
        <span
            v-if="buy === -1"
            v-html="$t('sell-with-crystal', [name, sell, crystals.length])"
        />
        <span
            v-else
            v-html="$t('buy-with-crystal', [name, buy, crystals.length])"
        />
        <span class="crystals">
            <span
                v-for="(crystal, index) in crystals"
                :key="index"
                :class="crystal"
                class="crystal"
            >
                <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 19 16"
                    width="19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.76795 2C8.53775 0.666668 10.4623 0.666667 11.2321 2L16.8612 11.75C17.631 13.0833 16.6688 14.75 15.1292 14.75L3.87084 14.75C2.33124 14.75 1.36898 13.0833 2.13878 11.75L7.76795 2Z"
                        fill="black"
                        stroke="black"
                        stroke-linejoin="round"
                        stroke-width="2"
                    />
                </svg>
            </span>
        </span>
    </component>
</template>

<style lang="scss" scoped>
.crystals {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0.5em;
    padding: 0.125em 0.5em;
    border-radius: 0.5em;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: var(--shadow-md);

    .crystal + .crystal {
        margin-left: 0.25em;
    }
}

.crystal {
    &.green {
        svg > path {
            fill: limegreen;
        }
    }

    &.orange {
        svg > path {
            fill: orange;
        }
    }

    &.purple {
        svg > path {
            fill: purple;
        }
    }
}

.crystal:nth-child(even) {
    transform: rotate(180deg);
}
</style>
