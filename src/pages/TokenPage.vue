<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'
import BackButton from '@/components/buttons/BackButton.vue'

import { useTokens } from '@/stores/tokens'
import { computed } from 'vue'

const props = defineProps<{ slug: string }>()
const tokens = useTokens()

const item = computed(() => tokens.getItemByKey(props.slug))
</script>

<template>
    <div class="container">
        <header class="header">
            <BackButton />
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
