<script lang="ts" setup>
import ThemeToggle from '@/components/buttons/ThemeToggle.vue'
import InstallApp from '@/components/buttons/InstallApp.vue'

import { computed, ref, watch } from 'vue'
import { useTokens } from '@/stores/tokens'
import { useRouter } from 'vue-router'
import { debounce } from '@/helpers/debounce'

const tokens = useTokens()
const router = useRouter()

const q = ref(tokens.q)
const searching = ref(false)

watch(
    q,
    debounce((newQ) => {
        tokens.q = newQ
        router.push('/')
    }, 600)
)

const searchClass = computed(() => ({
    'has-text': q.value.length > 0,
}))

const onSearch = (ev: SubmitEvent) => {
    tokens.q = q.value
    router.push('/')
    return ev
}

const onFocus = (ev: FocusEvent) => {
    searching.value = true
    return ev
}

const onBlur = (ev: FocusEvent) => {
    searching.value = false
    return ev
}

const onClear = (ev: MouseEvent) => {
    q.value = ''
    tokens.q = ''
    router.push('/')
    return ev
}
</script>

<template>
    <header :class="{ searching }" class="menu">
        <div class="container">
            <router-link class="logo" to="/">
                <span>Core</span>
                <span>Space</span>
            </router-link>
            <form
                :class="searchClass"
                class="search"
                @submit.prevent="onSearch"
            >
                <label class="label" for="q">
                    <span class="material-symbols-rounded">search</span>
                </label>
                <input
                    id="q"
                    v-model.trim="q"
                    :placeholder="$t('search_placeholder')"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    class="search-input"
                    name="q"
                    type="text"
                    @blur="onBlur"
                    @focus="onFocus"
                />
                <input
                    class="material-symbols-rounded search-clear"
                    type="reset"
                    value="close"
                    @click.prevent="onClear"
                />
            </form>
            <div class="actions">
                <InstallApp class="install" />
                <router-link to="/settings">
                    <span class="material-symbols-rounded">Settings</span>
                </router-link>
                <ThemeToggle class="theme" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.menu {
    position: sticky;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    background-color: var(--header-bg);
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(5px) grayscale(100%);

    .container {
        display: grid;
        align-items: center;
        min-height: 5rem;
        margin: 0;
        padding: 0 1em;
        grid-template-columns: auto 1fr auto;
    }
}

.logo {
    font-family: var(--font-title);
    font-size: 150%;
    font-weight: bold;
    display: grid;
    margin-right: 1.5em;
    padding: 0 0.5em;
    transition: all 0.3s ease-out;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.75;
    color: var(--body-color);

    span:first-child {
        font-size: 125%;
    }

    &:active,
    &:hover {
        transform: scale(1.15);
        opacity: 1;
    }
}

.actions {
    display: flex;
    align-items: center;
    padding-left: 1em;
}

.search {
    font-size: 16px;
    position: relative;
    display: flex;
    width: 100%;
    max-width: 40vw;
    margin: 0 1em;
    padding: 0 1em;
    transition: all 0.2s ease-out;
    color: var(--input-color);
    border: solid 1px var(--input-border);
    border-radius: var(--input-radius);
    background-color: var(--input-bg);
    box-shadow: var(--glow);

    .search-input {
        position: relative;
        z-index: 1;
        display: block;
        flex: 1;
        width: 100%;
        height: var(--search-height);
        padding: 0 0.5em;
        color: var(--input-color);
        border: none;
        outline: none;
        background: none;
    }

    .search-clear {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        left: auto;
        visibility: hidden;
        box-sizing: content-box;
        min-width: var(--icon-button-width);
        height: var(--search-height);
        padding: 0 0.5em;
        cursor: pointer;
        transition: all 0.2s ease-out;
        text-align: center;
        opacity: 0;
        color: var(--input-color);
        border: none;
        outline: none;
        background: transparent;
        appearance: none;
        speak: none;
    }

    .label {
        padding: 0.6em 0.25em 0.4em;
        transition: all 0.2s ease-out;
        opacity: 0.9;
    }

    &.has-text {
        .search-clear {
            visibility: visible;
            opacity: 0.9;
        }
    }

    .search-button:hover {
        transform: scale(1.2);
        color: var(--primary-contrast);
        background: var(--primary);
    }

    .search-clear:hover {
        transform: scale(1.2);
    }
}

.actions {
    display: flex;
    transition: all 0.2s ease-out;
    color: var(--body-color);

    a {
        margin-left: 1em;
        transition: all 0.2s ease-out;
        opacity: 0.75;
        color: inherit;

        span {
            font-size: 200%;
        }

        &:active,
        &:hover {
            transform: scale(1.25);
            opacity: 1;
        }
    }
}

@media (min-width: 601px) {
    .searching {
        .container {
            overflow: hidden;
        }

        .search {
            left: 0;
            max-width: 80vw;
            transform: translateX(-6em);
            animation: grow 300ms ease-in;

            .search-button {
                transform: translateX(0);
            }
        }

        .logo {
            transform: translateX(-5em);
            opacity: 0;
        }

        .actions {
            transform: translateX(20em);
            opacity: 0;
        }
    }
}

@keyframes grow {
    0% {
        max-width: 40vw;
    }
    100% {
        max-width: 60vw;
    }
}

@media (max-width: 600px) {
    .container {
        display: flex;
        align-items: center;
    }
    .search {
        flex: 1;
        width: 100%;
        max-width: 100%;
        padding: 0 0.5em;
    }
    .actions {
        margin-right: 0.5em;
        justify-self: flex-end;
    }
    .logo,
    .theme {
        display: none;
    }
}
</style>
