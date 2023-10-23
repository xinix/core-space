<script lang="ts" setup>
import TokenLoader from '@/components/tokens/TokenLoader.vue'

defineProps<{ slug: string }>()
</script>

<template>
    <div class="container">
        <main class="details">
            <suspense>
                <TokenLoader :slug="slug" />
                <template #fallback>Loading...</template>
            </suspense>
        </main>
    </div>
</template>

<style lang="scss">
.container:focus {
    outline: none;
}

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
