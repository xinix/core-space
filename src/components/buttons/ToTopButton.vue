<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue'
import { debounce } from '@/helpers/debounce'

const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
const active = ref(false)

const handleScroll = debounce(() => {
    active.value = window.scrollY > 20
}, 200)

window.addEventListener('scroll', handleScroll)

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <button :class="{ active }" class="btn-top" type="button" @click="toTop">
        <span class="content material-symbols-rounded"
            >keyboard_double_arrow_up</span
        >
    </button>
</template>

<style lang="scss" scoped>
.btn-top {
    position: fixed;
    right: 1em;
    bottom: 0;
    display: inline-flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 3.5em;
    height: 3.5em;
    margin: 1em;
    padding: 1em;
    transition: all 0.2s ease;
    transform: translateY(10rem);
    opacity: 0;
    color: var(--input-bg);
    border-radius: 1em;
    background-color: var(--input-color);
    box-shadow: var(--shadow-md);

    .content {
        font-size: 200%;
        display: inline-block;
        margin-top: -5px;
    }

    &.active {
        transform: translateY(0);
        opacity: 0.8;
    }

    &.active:hover {
        transform: scale(1.1);
        opacity: 1;

        .content {
            animation: animateTop 0.25s;
        }
    }
}

@keyframes animateTop {
    0%,
    100% {
        transform: translateY(0);
        opacity: 1;
    }

    50% {
        transform: translateY(-5rem);
    }
    51% {
        opacity: 0;
        transform: translateY(5rem);
    }
}
</style>
