<script lang="ts" setup>
import { ref } from 'vue'

const showPrompt = ref(false)
let installPrompt: any

window.addEventListener('beforeinstallprompt', (e) => {
    installPrompt = e
    if (window.localStorage.getItem('app') == null) {
        showPrompt.value = true
    }
})

const install = async () => {
    installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice
    if (outcome === 'accepted') {
        window.localStorage.setItem('app', 'installed')
    }
}

const onInstall = (ev: MouseEvent) => {
    if (installPrompt != null) {
        install().then()
    }
    showPrompt.value = false
    return ev
}

const onCancel = (ev: MouseEvent) => {
    window.localStorage.setItem('app', 'declined')
    showPrompt.value = false
    return ev
}
</script>

<template>
    <footer v-if="showPrompt" class="install-app">
        <div class="prompt">
            <span class="material-symbols-rounded">install_mobile</span>
            <span>{{ $t('install_app') }}</span>
        </div>
        <div class="buttons">
            <button class="btn btn-link" type="button" @click="onInstall">
                {{ $t('install') }}
            </button>
            <button class="btn" type="button" @click="onCancel">
                {{ $t('no_thanks') }}
            </button>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.install-app {
    font-weight: bold;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 1em;
    color: var(--primary-contrast);
    background-color: var(--primary);

    .prompt {
        font-size: 1.25em;
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        grid-column-gap: 0.75em;
    }

    .btn-link {
        margin-right: 1em;
        padding: 0.25em 1em;
        border: solid 3px var(--primary-contrast);
        border-radius: 0.25em;
    }
}

@media (max-width: 600px) {
    .install-app {
        display: grid;
        grid-row-gap: 1em;

        .buttons {
            justify-self: center;
        }
    }
}
</style>
