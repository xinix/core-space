<script lang="ts" setup>
import { ItemDescription } from '@/tokens/types'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = withDefaults(
    defineProps<{
        attribute: ItemDescription
        tag?: string
        mustache?: number | number[] | null
    }>(),
    {
        tag: 'p',
        mustache: null,
    }
)

const { t } = useI18n()

const text = computed(() => {
    if (props.mustache != null) {
        return t(
            props.attribute,
            Array.isArray(props.mustache) ? props.mustache : [props.mustache]
        )
    }
    return t(props.attribute)
})
</script>

<template>
    <component :is="tag" class="attribute" v-html="text" />
</template>

<style lang="scss" scoped>
.attribute {
    line-height: 1.4;
}
</style>
