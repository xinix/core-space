<script lang="ts" setup>
import MenuHeader from '@/components/app/MenuHeader.vue'
import ToTopButton from '@/components/buttons/ToTopButton.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const rt = useRoute()

const search = computed(() => rt.meta.search ?? false)
const back = computed(() => rt.meta.back ?? false)
</script>

<template>
    <MenuHeader :show-back="back" :show-search="search" />
    <main class="content">
        <router-view v-slot="{ Component, route }">
            <transition mode="out-in" name="slide-fade">
                <component :is="Component" :key="route.path" />
            </transition>
        </router-view>

        <ToTopButton />
    </main>
</template>
