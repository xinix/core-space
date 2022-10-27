<script lang="ts" setup>
import ThemeToggle from '@/components/buttons/ThemeToggle.vue'
import InstallApp from '@/components/buttons/InstallApp.vue'
import Logo from '@/components/app/CoreSpaceLogo.vue'
import FilterButton from '@/components/buttons/FilterButton.vue'
import BackButton from '@/components/buttons/BackButton.vue'

import { computed, ref, watch } from 'vue'
import { useTokens } from '@/stores/tokens'
import { useRouter } from 'vue-router'
import { debounce } from '@/helpers/debounce'

const tokens = useTokens()
const router = useRouter()

const props = withDefaults(
    defineProps<{ showSearch?: boolean; showBack?: boolean }>(),
    {
        showBack: false,
        showSearch: false,
    }
)

const q = ref(tokens.q)
const searching = ref(false)

const showActions = computed(() => !searching.value)
const showLogo = computed(() => !searching.value)

watch(
    q,
    debounce((newQ) => {
        tokens.q = newQ
        router.push('/')
    }, 600)
)

const headerClass = computed(() => ({
    'searching': searching.value,
    'with-back': props.showBack,
    'with-search': props.showSearch,
}))

const searchClass = computed(() => ({
    'has-text': q.value.length > 0,
}))

const onSearch = () => {
    tokens.q = q.value
    router.push('/')
}

const onFocus = (ev: FocusEvent) => {
    searching.value = true
    return ev
}

let blurT: ReturnType<typeof setTimeout> | null = null
const onBlur = (ev: FocusEvent) => {
    blurT = setTimeout(() => {
        blurT = null
        searching.value = false
    }, 300)
    return ev
}

const searchInput = ref()

const onClear = (ev: MouseEvent) => {
    if (blurT != null) {
        clearTimeout(blurT)
        blurT = null
    }
    searching.value = true
    q.value = ''
    tokens.q = ''
    router.push('/')
    searchInput.value.focus()
    return ev
}

const onEsc = (ev: KeyboardEvent) => {
    searching.value = false
    return ev
}

const focus = () => {
    searching.value = true
    searchInput.value.focus()
}
defineExpose({ focus })
</script>

<template>
    <header :class="headerClass" class="menu">
        <div class="container">
            <transition duration="100" mode="out-in" name="slide">
                <BackButton v-if="showBack" class="back" />
                <router-link v-else-if="showLogo" class="logo" to="/">
                    <Logo />
                </router-link>
            </transition>

            <transition name="slide">
                <form
                    v-if="showSearch"
                    :class="searchClass"
                    class="search"
                    @submit.prevent="onSearch"
                >
                    <label class="label" for="q">
                        <span class="material-symbols-rounded">search</span>
                    </label>
                    <input
                        id="q"
                        ref="searchInput"
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
                        @keyup.esc="onEsc"
                    />
                    <input
                        class="material-symbols-rounded search-clear"
                        type="reset"
                        value="close"
                        @click.prevent="onClear"
                    />
                    <code>/</code>
                </form>
            </transition>

            <transition duration="100" name="slide">
                <div v-if="showActions" class="actions">
                    <FilterButton v-if="showSearch" />
                    <router-link to="/settings">
                        <span class="material-symbols-rounded">Settings</span>
                    </router-link>
                    <ThemeToggle class="theme" />
                    <InstallApp class="install" />
                </div>
            </transition>
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
        display: flex;
        align-items: center;
        min-height: 5rem;
        margin: 0;
        padding: 0 2em;
        gap: 0.5em;
    }
}

.logo {
    font-family: var(--font-title);
    font-size: 150%;
    font-weight: bold;
    display: grid;
    padding: 0 0.5em;
    transition: all 0.3s ease-out;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.75;
    color: var(--body-color);

    img {
        height: 2em;
    }

    &:active,
    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
}

.back {
    padding-right: 0.5em;
}

.actions {
    display: flex;
    align-items: center;
}

.search {
    font-size: 16px;
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 40vw;
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

        code {
            transform: translate(-3.5em, 0.5em);
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

    code {
        font-weight: bold;
        position: absolute;
        right: 0;
        padding: 0.325em 0.75em;
        transform: translate(-0.5em, 0.5em);
        color: var(--code-color);
        border-radius: 0.325em;
        background-color: var(--code-bg);
    }
}

.actions {
    display: flex;
    margin-left: auto;
    transition: all 0.2s ease-out;
    color: var(--body-color);
    gap: 1.5em;

    a {
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

.searching {
    .container {
        overflow: hidden;
    }

    .search {
        left: 0;
        max-width: 90vw;

        .search-button {
            transform: translateX(0);
        }

        code {
            display: none;
        }
    }
}

@media (max-width: 600px) {
    .menu .container {
        padding: 0 1em;
    }
    .search {
        flex: 1;
        width: 100%;
        max-width: 100%;
        padding: 0 0.5em;
        border: solid 1px transparent;
        background-color: transparent;
        box-shadow: none;

        .label > span {
            font-size: 200%;
        }

        .search-clear,
        .search-input {
            transform: scale(0);
        }
    }

    .searching .search {
        border: solid 1px var(--primary);
        background-color: var(--input-bg);
        box-shadow: var(--glow);

        .label > span {
            font-size: 150%;
        }

        .search-clear,
        .search-input {
            transform: scale(1);
        }
    }

    .theme {
        display: none;
    }
}
</style>
