<script lang="ts" setup>
import MenuHeader from '@/components/app/MenuHeader.vue'
</script>

<template>
    <MenuHeader />
    <main class="content">
        <router-view v-slot="{ Component, route }">
            <transition mode="out-in" name="slide-fade">
                <component :is="Component" :key="route.path" />
            </transition>
        </router-view>
    </main>
</template>
