<script lang="ts" setup>
import TokensPage from '@/pages/TokensPage.vue'
import ThemeToggle from '@/components/buttons/ThemeToggle.vue'

import { computed } from 'vue'
import { useTokens } from '@/stores/tokens'

const tokens = useTokens()
const searchClass = computed(() => ({
    'has-text': tokens.q.length > 0,
}))
const onClear = (ev: MouseEvent) => {
    tokens.clearQ()
    return ev
}
const onSearch = (ev: SubmitEvent) => {
    return ev
}
</script>

<template>
    <div class="page">
        <header class="header">
            <a class="logo" href="/">
                <img alt="logo" src="/logo.svg" />
            </a>
            <form
                :class="searchClass"
                class="search"
                @submit.prevent="onSearch"
            >
                <input
                    v-model.trim="tokens.q"
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
            <ThemeToggle />
        </header>
        <main class="content">
            <TokensPage
                :active-slug="tokens.active"
                :items="tokens.items"
                :q="tokens.q"
                @back="tokens.backToOverview"
                @clear="tokens.clearQ"
                @select="tokens.activate"
            />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: sticky;
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

    .logo > img {
        width: 3.5rem;
        height: 3.5rem;
        border: solid 1px #ffffff;
        border-radius: 100%;
        background-color: #ffffff;
    }
}

.content {
    padding: 1rem;
}

.search {
    font-size: 16px;
    position: relative;
    display: flex;
    max-width: 590px;
    margin: 0 1em;
    padding: 0 2em;
    color: var(--input-color);
    border: solid 1px var(--input-border);
    border-radius: var(--input-radius);
    background-color: var(--input-bg);

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

    &:hover {
        .search-button {
            color: var(--primary-contrast);
            background: var(--primary);
        }
    }
}

@media (max-width: 450px) {
    .search {
        padding: 0 0.5em;
    }
}
</style>
