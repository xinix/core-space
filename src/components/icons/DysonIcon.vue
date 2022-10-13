<script lang="ts" setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'
</script>
<template>
    <BaseIcon :height="88" :scale="0.4" :width="88">
        <circle
            cx="44"
            cy="44"
            r="40"
            stroke="white"
            stroke-dasharray="8 5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
        />
        <circle
            cx="44"
            cy="44"
            r="40"
            stroke="#D961BF"
            stroke-dasharray="8 4"
            stroke-linejoin="round"
            stroke-width="5"
        />
    </BaseIcon>
</template>
