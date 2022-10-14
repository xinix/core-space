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
</script>

<template>
    <button
        v-if="showPrompt"
        :title="$t('install_app')"
        class="btn btn-link"
        type="button"
        @click="onInstall"
    >
        <span class="material-symbols-rounded">install_mobile</span>
    </button>
</template>

<style lang="scss" scoped>
.btn-link {
    padding: 0.6em;
    opacity: 0.75;
    border-radius: 100%;
    background-color: var(--primary-transparent);

    &:hover,
    &:active {
        opacity: 1;
    }
}
</style>
