<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
    name: string
    options: string[]
    modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])
const selected = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})
</script>
<template>
    <div class="radio-group">
        <label v-for="option in options" :key="option" class="radio">
            <input
                :id="`${name}-${option}`"
                v-model="selected"
                :name="name"
                :value="option"
                type="radio"
            />
            <span>{{ $t(option) }}</span>
        </label>
    </div>
</template>
<style lang="scss" scoped>
.radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1em 2em;
}
</style>
