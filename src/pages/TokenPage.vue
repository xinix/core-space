<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'

import { useRouter } from 'vue-router'
import { useTokens } from '@/stores/tokens'
import { computed } from 'vue'

const props = defineProps<{ slug: string }>()
const tokens = useTokens()

const router = useRouter()
const onBack = (ev: MouseEvent) => {
    if (window.history.length > 2) {
        router.back()
    } else {
        router.push('/')
    }
    return ev
}

const item = computed(() => tokens.getItemBySlug(props.slug))
</script>

<template>
    <div class="container">
        <header class="header">
            <button class="btn" type="button" @click="onBack">
                <span class="material-symbols-rounded icon">arrow_back</span>
                <span>{{ $t('back') }}</span>
            </button>
        </header>
        <main v-if="item" class="details">
            <TokenDetails :item="item" active class="item" />
        </main>
    </div>
</template>

<style lang="scss">
.details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.header {
    max-width: 1400px;
    margin: 1em auto;
    text-align: left;
}
</style>
