<script lang="ts" setup>
import { getInputId } from '@/helpers/input-id'
import { computed } from 'vue'

const props = defineProps<{
    label: string
    value: string
    modelValue: string[]
}>()
const emit = defineEmits(['update:modelValue'])
const inputId = getInputId()

const isChecked = computed({
    get: () => props.modelValue.indexOf(props.value) >= 0,
    set: (checked) => {
        if (checked) {
            emit('update:modelValue', [...props.modelValue, props.value])
            return
        }
        const items = [...props.modelValue]
        const index = items.indexOf(props.value)
        items.splice(index, 1)
        emit('update:modelValue', items)
    },
})
</script>

<template>
    <label :class="value" :for="inputId" class="checkbox">
        <input
            :id="inputId"
            v-model="isChecked"
            :value="value"
            type="checkbox"
        />
        <slot>{{ $t(label) }}</slot>
    </label>
</template>

<style lang="scss" scoped>
.checkbox {
    font-size: 125%;
    line-height: 1.1;
    display: grid;
    cursor: pointer;
    grid-template-columns: 1em auto;
    gap: 0.75em;
}

input[type='checkbox'] {
    font: inherit;
    display: grid;
    width: 1.15em;
    height: 1.15em;
    margin: 0;
    transform: translateY(-0.075em);
    opacity: 0.6;
    color: currentColor;
    border: 0.15em solid var(--input-border);
    border-radius: 0.15em;
    background-color: var(--primary-transparent);
    appearance: none;
    place-content: center;

    &:before {
        width: 0.65em;
        height: 0.65em;
        content: '';
        transition: 120ms transform ease-in-out;
        transform: scale(0);
        transform-origin: bottom left;
        box-shadow: inset 1em 1em currentColor;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked {
        opacity: 1;
    }

    &:checked:before {
        transform: scale(1);
    }

    &:hover,
    &:focus {
        opacity: 1;
        color: currentColor;
    }
}

.blue input[type='checkbox'] {
    background: var(--blue);
}

.yellow input[type='checkbox'] {
    background: var(--yellow);
}

.orange input[type='checkbox'] {
    background: var(--orange);
}

.green input[type='checkbox'] {
    background: var(--green);
}

.lime input[type='checkbox'] {
    background: var(--lime);
}

.brown input[type='checkbox'] {
    background: var(--brown);
}

.white input[type='checkbox'] {
    background: var(--white);
}

.purple input[type='checkbox'] {
    background: var(--purple);
}

.violet input[type='checkbox'] {
    background: var(--violet);
}

.teal input[type='checkbox'] {
    background: var(--teal);
}
</style>
