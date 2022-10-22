<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const onBack = (ev: MouseEvent) => {
    router.push('/')
    return ev
}
</script>
<template>
    <button class="btn" type="button" v-bind="$attrs" @click="onBack">
        <span class="material-symbols-rounded icon">arrow_back</span>
        <span class="label">{{ $t('back') }}</span>
    </button>
</template>
<style lang="scss" scoped>
@media (max-width: 600px) {
    .label {
        display: none;
    }
}
</style>
