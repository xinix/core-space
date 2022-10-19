<script lang="ts" setup>
import { ProductType } from '@/tokens/types'
import ProductOption from '@/components/forms/ProductOption.vue'

const props = defineProps<{
    modelValue: ProductType[]
    options: ProductType[]
}>()
const emit = defineEmits(['update:modelValue'])

const onSelect = (option: ProductType) => {
    const selected = [...props.modelValue]
    const index = selected.indexOf(option)
    if (index >= 0) {
        selected.splice(index, 1)
    } else {
        selected.push(option)
    }
    emit('update:modelValue', selected)
}
</script>

<template>
    <ul class="products">
        <ProductOption
            v-for="option in options"
            :key="option"
            :option="option"
            :selected="modelValue"
            tag="li"
            @select="onSelect"
        ></ProductOption>
    </ul>
</template>

<style lang="scss" scoped>
.products {
    display: grid;
    align-items: flex-start;
    margin-bottom: 2em;
    list-style: none;
    grid-gap: 4em 3em;
}

@media (min-width: 500px) {
    .products {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 900px) {
    .products {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1400px) {
    .products {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
