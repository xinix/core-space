<template>
    <TokenDetails v-if="item" :item="item" active class="item" />
</template>
<script lang="ts" setup>
import TokenDetails from '@/components/tokens/TokenDetails.vue'

import { ref } from 'vue'
import { CoreSpaceToken } from '@/tokens/types'
import { useTokens } from '@/stores/tokens'

const tokens = useTokens()
const props = defineProps<{ slug: string }>()

const item = ref<CoreSpaceToken>()

item.value = await tokens.getItemByKey(props.slug)
</script>
