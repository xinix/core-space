<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
    name: string
    value: 'dark' | 'light'
    modelValue: 'dark' | 'light'
}>()
const emit = defineEmits(['update:modelValue'])

const option = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})

const icon = computed(() => `${props.value}_mode`)

const quotes = {
    dark: {
        quote: "I think we've been lucky. We've managed to catch the First Born on the hop. Did they seem more organised to you when we went on that last raid?",
        by: "Balcor, Nerind'ar, age: 60",
        image: 'balcor',
    },
    light: {
        quote: 'They did. I kept a couple of the Engrams aside. Daric thought we might be able to use them, what do you think, Balcor?',
        by: 'Cassiopeia Peltier, Human, age: 32',
        image: 'cassie',
    },
}

const quote = computed(() => quotes[props.value])
</script>
<template>
    <label :for="name" class="theme-option">
        <input
            :id="name"
            v-model="option"
            :value="value"
            name="theme"
            type="radio"
        />
        <span class="option">
            <span class="name">
                <span class="material-symbols-rounded off">
                    radio_button_unchecked
                </span>
                <span class="material-symbols-rounded on">
                    radio_button_checked
                </span>
                <span>{{ $t(icon) }}</span>
            </span>
            <span class="preview">
                <span :class="quote.image" class="crew" />
                <strong>{{ quote.quote }}</strong>
                <small>{{ quote.by }}</small>
            </span>
        </span>
    </label>
</template>

<style lang="scss" scoped>
.theme-option {
    display: block;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.1s ease-in;

    input {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 1px;
        height: 1px;
    }

    .option {
        display: block;
        transition: all 0.3s ease-out;
        opacity: 0.75;
        border: solid 3px var(--input-border);
        border-radius: 0.5em;

        .on,
        .off {
            margin-right: 0.5em;
        }

        .on {
            display: none;
        }
    }

    input:checked + .option,
    &:hover .option {
        opacity: 1;
        border-color: var(--primary);
        box-shadow: var(--shadow-lg);
    }

    input:checked + .option {
        .on {
            display: inline-block;
        }

        .off {
            display: none;
        }
    }

    &:hover {
        transform: scale(1.05);
    }

    &[for='dark-mode'] .option {
        color: var(--dark-color);
        background: var(--dark-bg);
    }

    &[for='light-mode'] .option {
        color: var(--light-color);
        background: var(--light-bg);
    }

    .name {
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 1em;
    }

    .preview {
        display: grid;
        padding: 1em;
        border-top: solid 2px var(--primary);
        grid-gap: 0.25em 1.25em;
        grid-template-columns: 3em 1fr;

        strong {
            font-style: italic;
        }

        .crew {
            width: 3em;
            height: 3em;
            border-radius: 100%;
            box-shadow: var(--shadow-md);
            grid-row: 1 / span 2;
        }

        .cassie {
            background-image: var(--cassie);
            background-size: cover;
        }

        .balcor {
            background-image: var(--balcor);
            background-size: cover;
        }
    }
}
</style>
