<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ value: number; total: number }>()

const perc = computed(() => {
    return (props.value / props.total) * 195
})
</script>

<template>
    <div class="progress-bar">
        <svg class="svg" viewBox="0 0 200 30">
            <line
                class="bg"
                stroke="#899390"
                stroke-linecap="round"
                stroke-width="5"
                x1="5"
                x2="195"
                y1="15"
                y2="15"
            />
            <line
                v-if="perc"
                :x2="perc"
                class="bar"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-width="5"
                x1="5"
                y1="15"
                y2="15"
            />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
$color: hsl(300, 100%, 60%);

.svg {
    position: relative;
    width: 100%;
    height: 100%;
}

.bar {
    width: 100%;
    height: 100%;
    stroke: hsl(0, 0%, 100%);
    filter: drop-shadow(0 0 5px $color);
}
</style>
