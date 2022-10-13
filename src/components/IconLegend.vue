<script lang="ts" setup>
import AttributeIcon from '@/components/icons/AttributIcon.vue'
import { AttributeType } from '@/tokens/types'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        icon: AttributeType
        tag?: string
        mustache?: number | number[] | null
        legend?: string
    }>(),
    {
        tag: 'div',
        mustache: null,
        legend: '',
    }
)

const { t } = useI18n()

const showMustache = computed(
    () => props.mustache != null && !Array.isArray(props.mustache)
)

const numberClass = computed(() => {
    const cls: any = {}
    cls[props.icon] = true
    return cls
})

const text = computed(() => {
    const legend = props.legend === '' ? props.icon : props.legend
    if (props.mustache != null) {
        return t(
            legend,
            Array.isArray(props.mustache) ? props.mustache : [props.mustache]
        )
    }
    return t(legend)
})
</script>

<template>
    <component :is="tag" class="icon-description">
        <figure>
            <AttributeIcon :attribute="icon" />
            <span v-if="showMustache" :class="numberClass" class="number">{{
                mustache
            }}</span>
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
        position: relative;
        display: flex;
        justify-content: center;

        .number {
            font-size: 0.8em;
            font-weight: bold;
            position: absolute;
            padding-top: 0.325em;

            &.phase {
                left: 0.25em;
            }

            &.throw {
                top: -0.125em;
                margin-left: -0.125em;
            }

            &.heavy {
                top: 0.25em;
                margin-left: 0.125em;
            }
        }
    }
}

@media (max-width: 600px) {
    .icon-description {
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
    }
}
</style>
