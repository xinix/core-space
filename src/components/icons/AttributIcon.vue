<template>
    <component :is="symbol" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { AttributeType } from '@/tokens/types'

const props = defineProps<{ attribute: AttributeType }>()

const symbol = computed<string>(
    () => `${props.attribute.replace('_', '-')}-icon`
)
</script>
