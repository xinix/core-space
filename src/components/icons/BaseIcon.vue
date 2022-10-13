<template>
    <svg
        :height="h"
        :viewBox="vb"
        :width="w"
        class="icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <slot :height="height" :width="width" />
    </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{ width: number; height: number; scale?: number }>(),
    {
        scale: 1,
    }
)
const w = computed(() => props.width * props.scale)
const h = computed(() => props.height * props.scale)
const vb = computed(() => `0 0 ${props.width} ${props.height}`)
</script>
