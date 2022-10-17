<script lang="ts" setup>
import { ref } from 'vue'

const showPrompt = ref(false)
let installPrompt: any

window.addEventListener('beforeinstallprompt', (e) => {
    installPrompt = e
    showPrompt.value = true
})

const install = async () => {
    installPrompt.prompt()
    const { outcome } = await installPrompt.userChoice
    if (outcome === 'accepted') {
        showPrompt.value = false
    }
}

const onInstall = (ev: MouseEvent) => {
    if (installPrompt != null) {
        install().then()
    }
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

    span {
        font-size: 150%;
    }

    &:hover,
    &:active {
        opacity: 1;
    }
}
</style>
