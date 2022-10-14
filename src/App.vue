<script lang="ts" setup>
import ThemeToggle from '@/components/buttons/ThemeToggle.vue'

import { computed, ref, watch } from 'vue'
import { useTokens } from '@/stores/tokens'
import { useRouter } from 'vue-router'

const router = useRouter()
const tokens = useTokens()
const q = ref('')

tokens.$subscribe((mutation, state) => {
    if (state.q == '') {
        q.value = ''
    }
})

const searchClass = computed(() => ({
    'has-text': q.value.length > 0,
}))

const onSearch = (ev: SubmitEvent) => {
    return ev
}

const onClear = (ev: MouseEvent) => {
    q.value = ''
    return ev
}

watch(q, (query) => {
    if (query === '') {
        return router.push('/')
    }
    return router.push({ path: '/', query: { q: query } })
})
</script>

<template>
    <div class="page">
        <header class="header">
            <router-link class="logo" to="/">
                <img alt="logo" src="/logo.svg" />
            </router-link>
            <form
                :class="searchClass"
                class="search"
                @submit.prevent="onSearch"
            >
                <input
                    v-model.trim="q"
                    :placeholder="$t('search_placeholder')"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    class="search-input"
                    name="q"
                    type="text"
                />
                <input
                    class="material-symbols-rounded search-clear"
                    type="reset"
                    value="close"
                    @click.prevent="onClear"
                />
                <input
                    class="material-symbols-rounded search-button"
                    type="submit"
                    value="search"
                />
            </form>
            <ThemeToggle class="theme" />
        </header>
        <main class="content">
            <router-view />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: sticky;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    display: grid;
    align-items: center;
    width: 100vw;
    height: 5rem;
    margin: 0;
    padding: 0 1em;
    background-color: var(--header-bg);
    box-shadow: var(--shadow-md);
    grid-template-columns: auto 1fr auto;

    .logo {
        margin-right: 1.5em;

        > img {
            width: 3.5rem;
            height: 3.5rem;
            border: solid 1px #ffffff;
            border-radius: 100%;
            background-color: #ffffff;
        }
    }
}

.content {
    padding: 1rem;
}

.search {
    font-size: 16px;
    position: relative;
    display: flex;
    width: 100%;
    max-width: 590px;
    margin: 0 1em;
    padding: 0 1.5em;
    color: var(--input-color);
    border: solid 1px var(--input-border);
    border-radius: var(--input-radius);
    background-color: var(--input-bg);
    box-shadow: var(--glow);
    justify-self: center;

    .search-input {
        position: relative;
        z-index: 1;
        display: block;
        flex: 1;
        width: 100%;
        height: var(--search-height);
        padding: 0;
        color: var(--input-color);
        border: none;
        outline: none;
        background: none;
    }

    .search-clear,
    .search-button {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        left: auto;
        box-sizing: content-box;
        min-width: var(--icon-button-width);
        height: var(--search-height);
        cursor: pointer;
        text-align: center;
        color: var(--input-color);
        border: none;
        outline: none;
        background: transparent;
        appearance: none;
        speak: none;
    }

    .search-clear {
        right: 5px;
        visibility: hidden;
        margin-right: var(--icon-button-width);
        padding: 0 0.5em;
        transition: all 0.2s ease-out;
        opacity: 0;
    }

    .search-button {
        transition: all 0.2s ease-out;
        opacity: 0.9;
        border-top-right-radius: var(--input-radius);
        border-bottom-right-radius: var(--input-radius);
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

@media (max-width: 450px) {
    .header {
        position: relative;
        height: auto;
        padding-bottom: 1em;
        grid-template-columns: auto 1fr;
        grid-template-areas:
            'logo theme'
            'form form';
        grid-gap: 1em 0.75em;

        .logo {
            margin: 0.25em 0.5em;
            grid-area: logo;
        }

        .theme {
            justify-content: flex-end;
            grid-area: theme;
        }

        form {
            grid-area: form;
        }
    }
    .search {
        padding: 0 0.5em;
    }
}
</style>
