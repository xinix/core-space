<script lang="ts" setup>
import { ItemDescription } from '@/tokens/types'

withDefaults(defineProps<{ attribute: ItemDescription; tag: string }>(), {
    tag: 'p',
})
</script>

<template>
    <component :is="tag" class="attribute" v-html="$t(attribute)" />
</template>

<style lang="scss" scoped>
.attribute {
    line-height: 1.4;
}
</style>
