<template>
    <component :is="symbol" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ItemIcon } from '@/tokens/types'

const props = defineProps<{ attribute: ItemIcon }>()

const symbol = computed<string>(
    () => `${props.attribute.replace('_', '-')}-icon`
)
</script>
