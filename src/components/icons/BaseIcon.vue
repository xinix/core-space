<template>
    <svg
        :height="height"
        :viewBox="viewBox"
        :width="width"
        class="icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <slot :height="height" :width="width" />
    </svg>
</template>

<script lang="ts" setup>
withDefaults(
    defineProps<{ width: number; height: number; viewBox?: string }>(),
    { viewBox: '0 0 24 24' }
)
</script>
