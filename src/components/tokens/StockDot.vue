<template>
    <span :class="{ off: sold >= count }" class="stock"></span>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ count: number; sold?: number }>(), { sold: 0 })
</script>

<style lang="scss" scoped>
.stock {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 0.25em;
    background-color: seagreen;
    border: solid 2px lawngreen;

    &.off {
        opacity: 0.25;
        background-color: gray;
        border-color: powderblue;
    }
}
</style>
