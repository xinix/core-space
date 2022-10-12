<script lang="ts" setup>
import AttributeIcon from '@/components/icons/AttributIcon.vue'
import { ItemIcon } from '@/tokens/types'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        icon: ItemIcon
        tag?: string
        mustache?: number | number[] | null
    }>(),
    {
        tag: 'div',
        mustache: null,
    }
)

const { t } = useI18n()

const text = computed(() => {
    if (props.mustache != null) {
        return t(
            props.icon,
            Array.isArray(props.mustache) ? props.mustache : [props.mustache]
        )
    }
    return t(props.icon)
})
</script>

<template>
    <component :is="tag" class="icon-description">
        <figure>
            <AttributeIcon :attribute="icon" />
        </figure>
        <span v-html="text" />
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
