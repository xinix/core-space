<script lang="ts" setup>
import FormField from '@/components/forms/FormField.vue'
import BaseCheckbox from '@/components/forms/BaseCheckbox.vue'

import { computed, reactive, ref } from 'vue'
import { TokenColor, TokenSize } from '@/tokens/types'
import { useTokens } from '@/stores/tokens'

const tokens = useTokens()

const active = ref(false)
const popup = ref()

const colors: TokenColor[] = [
    'blue',
    'yellow',
    'orange',
    'green',
    'lime',
    'brown',
    'white',
    'purple',
    'violet',
    'teal',
]
const sizes: TokenSize[] = ['nano', 'sm', 'md', 'lg', 'xl', 'umd', 'ulg']

const state = reactive<{ colors: TokenColor[]; sizes: TokenSize[] }>({
    colors: [],
    sizes: [],
})
const hasFilter = computed(
    () => tokens.colors.length > 0 || tokens.sizes.length > 0
)

const toggle = () => {
    active.value = !active.value
    document.body.style.overflow = active.value ? 'hidden' : 'initial'
    if (active.value) {
        state.colors.splice(0, state.colors.length, ...tokens.colors)
        state.sizes.splice(0, state.sizes.length, ...tokens.sizes)

        setTimeout(() => {
            popup.value.focus()
        }, 300)
    }
}

const onEsc = (ev: KeyboardEvent) => {
    toggle()
    return ev
}

const onEnter = (ev: KeyboardEvent) => {
    ev.preventDefault()
    ev.cancelBubble = true

    toggle()
    tokens.filter(state.colors, state.sizes)
    return ev
}

const onToggle = (ev: MouseEvent) => {
    toggle()
    return ev
}

const onSave = () => {
    toggle()
    tokens.filter(state.colors, state.sizes)
}

const onClear = (ev: MouseEvent) => {
    toggle()
    tokens.filter([], [])
    return ev
}
</script>
<template>
    <a
        :class="{ active: hasFilter }"
        :title="$t('filter')"
        class="btn btn-filter"
        href="javascript:void(0)"
        type="button"
        @click="onToggle"
    >
        <span class="material-symbols-rounded">tune</span>
    </a>

    <transition name="fade">
        <div
            v-if="active"
            ref="popup"
            class="popup"
            tabindex="-1"
            @click.self="onToggle"
            @keyup.esc="onEsc"
            @keyup.enter="onEnter"
        >
            <div class="container">
                <header>
                    <h2>{{ $t('filter') }}</h2>

                    <div class="buttons">
                        <button class="btn" form="filter-form" type="submit">
                            <span class="material-symbols-rounded">check</span>
                            <code>ENTER</code>
                        </button>
                        <button class="btn" type="button" @click="onToggle">
                            <span class="material-symbols-rounded">close</span>
                            <code>ESC</code>
                        </button>
                    </div>
                </header>
                <form
                    id="filter-form"
                    class="content form-stacked"
                    @submit.prevent="onSave"
                >
                    <FormField v-if="hasFilter" name="clear">
                        <button class="clear" type="button" @click="onClear">
                            {{ $t('clear_filter') }}
                        </button>
                    </FormField>

                    <FormField label="size" name="size">
                        <BaseCheckbox
                            v-for="size in sizes"
                            :key="size"
                            v-model="state.sizes"
                            :label="size"
                            :value="size"
                        />
                    </FormField>
                    <FormField label="color" name="color">
                        <BaseCheckbox
                            v-for="color in colors"
                            :key="color"
                            v-model="state.colors"
                            :label="color"
                            :value="color"
                        >
                            <span :class="color" class="color">{{
                                $t(color)
                            }}</span>
                        </BaseCheckbox>
                    </FormField>
                </form>

                <footer>
                    <button form="filter-form" type="submit">
                        {{ $t('apply') }}
                    </button>
                </footer>
            </div>
        </div>
    </transition>
</template>
<style lang="scss" scoped>
.btn-filter {
    position: relative;
    transition: all 0.2s ease-out;
    opacity: 0.75;
    color: inherit;

    &:active,
    &:hover {
        transform: scale(1.25);
        opacity: 1;
    }

    span {
        font-size: 175%;
    }

    &.active:after {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        width: 0.65em;
        height: 0.6em;
        content: '';
        border-radius: 100%;
        background-color: red;
        box-shadow: var(--shadow-sm);
    }
}

.popup {
    position: fixed;
    z-index: 900;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-color: var(--transparent-bg);

    .container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        overflow: auto;
        flex-direction: column;
        width: 100%;
        max-width: 32em;
        height: 100%;
        margin-left: auto;
        animation: slide 0.2s ease-in;
        color: var(--popup-color);
        background-color: var(--popup-bg);
        box-shadow: var(--shadow-lg);

        button {
            text-transform: uppercase;
            color: var(--popup-color);
        }
    }

    .container > header {
        display: flex;
        justify-content: space-between;
        padding: 2em;
        text-transform: uppercase;

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.25em;
        }

        .btn + .btn {
            margin-left: 0.5em;
        }

        code {
            font-size: 75%;
            font-weight: normal;
            opacity: 0.7;
        }
    }

    .content {
        overflow: auto;
        flex: 1;
        max-height: calc(100% - 8em);
        padding: 0 1.25em;
    }

    .container > footer {
        button {
            font-family: var(--font-title);
            font-size: 1.5em;
            font-weight: bold;
            line-height: 1;
            display: block;
            width: 100%;
            padding: 0.75em;
            cursor: pointer;
            transition: all 0.2s ease-in;
            text-transform: uppercase;
            opacity: 0.75;
            color: var(--primary-contrast);
            background-color: var(--primary);

            &:hover {
                opacity: 1;
            }
        }
    }
}

@keyframes slide {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
