<script lang="ts" setup>
import { computed } from 'vue'
import { useProducts } from '@/stores/products'

const products = useProducts()

const posts = computed(() => {
    return [
        'bs-mart',
        'ucp',
        'claw-store',
        'armourote',
        'tech-noir',
        'giger',
        'workshop',
    ]
        .filter((post) =>
            post === 'workshop' ? products.active.indexOf('rogue') >= 0 : true
        )
        .map((s) => ({ slug: s, info: `${s}-info` }))
})
</script>

<template>
    <div class="container">
        <div class="bg-image"></div>

        <div class="box">
            <h1>{{ $t('trading-posts') }}</h1>
            <p v-html="$t('welcome-trader')" />
            <nav>
                <router-link
                    v-for="post in posts"
                    :key="post.slug"
                    :class="post.slug"
                    :to="{ name: 'trading-post', params: { slug: post.slug } }"
                    class="post"
                >
                    <figure></figure>
                    <strong>{{ $t(post.slug) }}</strong>
                    <small v-html="$t(post.info)" />
                </router-link>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-image {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    opacity: 0.25;
    background-image: var(--trade-phase-bg);
    background-position: center center;
    background-size: cover;
    filter: blur(2px);
}

.container {
    .box {
        max-width: 1400px;
        margin: 2em auto;
    }

    h1 {
        font-size: 300%;
        margin-bottom: 0.5em;
        text-transform: uppercase;
    }

    h1 + p {
        font-size: 125%;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        margin: 2em 0 20vh 0;
        gap: 1em;
    }
}

.post {
    font-size: 1.25em;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-decoration: none;
    color: var(--post-color);
    border-radius: 0.5em;
    background-color: var(--post-bg);
    box-shadow: var(--shadow-md);
    gap: 0.25em;

    figure {
        z-index: 1;
        width: 100%;
        height: 200px;
        transition: all 0.3s ease;
        background-image: var(--post-image);
        background-position: center center;
        background-size: cover;
    }

    &.bs-mart figure {
        background-image: var(--bs-mart-image);
    }

    &.ucp figure {
        background-image: var(--ucp-image);
    }

    &.claw-store figure {
        background-image: var(--claw-store-image);
    }

    &.armourote figure {
        background-image: var(--armourote-image);
        background-position: center 65%;
    }

    &.tech-noir figure {
        background-image: var(--tech-noir-image);
    }

    &.giger figure {
        background-image: var(--giger-image);
    }

    &.workshop figure {
        background-image: var(--workshop-image);
    }

    small {
        font-size: 0.75em;
        line-height: 1.3;
        margin-bottom: 0.75em;
        opacity: 0.6;
    }

    > small,
    > strong {
        padding: 0.25em 0.5em;
    }

    &:hover {
        figure {
            transform: scale(1.05);
        }
    }
}

@media (min-width: 600px) {
    .post {
        flex-basis: 48%;
    }
}

@media (min-width: 1000px) {
    .post {
        flex-basis: 32%;
    }
}

@media (min-width: 1400px) {
    .post {
        flex-basis: 23%;
    }
}
</style>
