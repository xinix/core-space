<script lang="ts" setup>
import AttributeIcon from '@/components/icons/AttributIcon.vue'
import { ItemIcon } from '@/tokens/types'

withDefaults(defineProps<{ icon: ItemIcon; tag?: string }>(), { tag: 'div' })
</script>

<template>
    <component :is="tag" class="icon-description">
        <figure>
            <AttributeIcon :attribute="icon" />
        </figure>
        <span v-html="$t(icon)" />
    </component>
</template>

<style lang="scss" scoped>
.icon-description {
    line-height: 1.4;
    display: grid;
    grid-template-columns: 60px 1fr;

    figure {
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 600px) {
    .icon-description {
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
    }
}
</style>
