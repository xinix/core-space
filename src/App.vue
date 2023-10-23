<script lang="ts" setup>
import MenuHeader from '@/components/app/MenuHeader.vue'
import ToTopButton from '@/components/buttons/ToTopButton.vue'

import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const rt = useRoute()

const search = computed<boolean>(() => !!rt.meta.search)
const back = computed<boolean>(() => !!rt.meta.back)

const menu = ref()
const main = ref()

setTimeout(() => main.value.focus(), 100)

const onKeyPress = (ev: KeyboardEvent) => {
    if (ev.key === '/') {
        menu.value.focus()
    }
    return ev
}
</script>

<template>
    <div class="wrapper">
        <MenuHeader
            ref="menu"
            :show-back="back"
            :show-search="search"
            tabindex="-2"
            @keyup="onKeyPress"
        />
        <main ref="main" class="content" tabindex="-1" @keyup="onKeyPress">
            <router-view v-slot="{ Component, route }">
                <transition mode="out-in" name="slide-fade">
                    <component :is="Component" :key="route.path" />
                </transition>
            </router-view>

            <ToTopButton />
        </main>
    </div>
</template>
