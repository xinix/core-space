<script lang="ts" setup>
import FormField from '@/components/forms/FormField.vue'
import ThemeOption from '@/components/forms/ThemeOption.vue'
import BaseRadioGroup from '@/components/forms/BaseRadioGroup.vue'
import ProductSelector from '@/components/forms/ProductSelector.vue'
import ProgressBar from '@/components/forms/ProgressBar.vue'
import CoreSpaceLogo from '@/components/app/CoreSpaceLogo.vue'
import KofiIcon from '@/components/app/KofiIcon.vue'

import nicoUrl from '@/assets/images/nico.png?url'

import { useTheme } from '@/stores/theme'
import { useProducts } from '@/stores/products'
import { useTokens } from '@/stores/tokens'
import { APP_VERSION } from '@/helpers/env'
import { useLanguage } from '@/stores/language'
import { useI18n } from 'vue-i18n'

const tokens = useTokens()
const theme = useTheme()
const products = useProducts()
const language = useLanguage()
const i18n = useI18n()

const onSave = () => {
    theme.save()
    theme.apply()
    products.save()
    language.save()
    language.apply()
    tokens.setChanged()
    i18n.locale.value = language.lang
}

const langs = ['en', 'nl']
const version = APP_VERSION
</script>

<template>
    <div class="settings">
        <header>
            <h1>
                <span class="material-symbols-rounded">Settings</span>
                {{ $t('preferences') }}
            </h1>
        </header>

        <form class="form-dotted" @submit.prevent="onSave">
            <FormField label="theme" name="theme">
                <ThemeOption
                    v-model="theme.theme"
                    name="dark-mode"
                    value="dark"
                    @update:model-value="onSave"
                />
                <ThemeOption
                    v-model="theme.theme"
                    name="light-mode"
                    value="light"
                    @update:model-value="onSave"
                />
            </FormField>

            <FormField label="lang" name="lang">
                <BaseRadioGroup
                    v-model="language.lang"
                    :options="langs"
                    name="lang"
                    @update:model-value="onSave"
                />
            </FormField>

            <FormField label="owned_products" name="products">
                <template #label>
                    <ProgressBar
                        :total="products.totalCount"
                        :value="products.inCollectionCount"
                    />
                </template>
                <template #default>
                    <ProductSelector
                        v-model="products.active"
                        :options="products.options"
                        @update:model-value="onSave"
                    />
                </template>
            </FormField>

            <FormField label="about" name="app">
                <div class="about">
                    <CoreSpaceLogo />
                    <div>
                        <span v-html="$t('copyright')"></span>&nbsp;
                        <a
                            href="https://www.battlesystems.co.uk/"
                            target="_blank"
                            >https://www.BattleSystems.co.uk</a
                        >
                    </div>
                    <div>
                        <strong>version {{ version }}</strong>
                        <p>{{ $t('this-is-free') }}</p>
                    </div>
                    <div class="about-me">
                        <img
                            :src="nicoUrl"
                            alt="This is me!"
                            class="float-pic"
                        />
                        <p v-html="$t('about-me')" />

                        <a
                            class="buy-me-a-coffee"
                            href="https://ko-fi.com/Q5Q7FSPQD"
                            target="_blank"
                        >
                            <KofiIcon class="icon" />
                            <span>{{ $t('buy-me-a-coffee') }}</span>
                        </a>
                    </div>

                    <div class="license">
                        <p>
                            <a
                                href="https://github.com/xinix/core-space"
                                target="_blank"
                                >Fork Me on Github</a
                            >
                        </p>

                        <section>
                            MIT License <br /><br />
                            Copyright (c) 2022
                            <br /><br />
                            Permission is hereby granted, free of charge, to any
                            person obtaining a copy of this software and
                            associated documentation files (the "Software"), to
                            deal in the Software without restriction, including
                            without limitation the rights to use, copy, modify,
                            merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to
                            whom the Software is furnished to do so, subject to
                            the following conditions:
                            <br /><br />
                            The above copyright notice and this permission
                            notice shall be included in all copies or
                            substantial portions of the Software.
                            <br /><br />
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
                            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                            LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND
                            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                            COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
                            OR OTHER LIABILITY, WHETHER IN AN ACTION OF
                            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
                            IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                            DEALINGS IN THE SOFTWARE.
                        </section>
                    </div>
                </div>
            </FormField>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.settings {
    max-width: 1400px;
    margin: 1em auto;
    padding-bottom: 50vh;

    header {
        margin-bottom: 3em;

        .btn {
            font-size: 90%;
            display: inline-flex;
            align-items: center;
            padding: 1em 0;
        }

        h1 {
            display: flex;
            align-items: center;
            margin-top: 0.25em;
        }

        span {
            font-size: 125%;
            margin: 0 0.25em;
        }
    }

    .about {
        display: grid;
        grid-gap: 1.5em 1em;

        p {
            margin: 1em 0;
        }
    }

    .buy-me-a-coffee {
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        margin: 1em 0;
        padding: 0.5em 1.5em;
        transition: all 0.2s ease-in;
        text-decoration: none;
        color: black;
        border-radius: 2em;
        background-color: white;
        box-shadow: var(--shadow-md);
        gap: 0.75em;

        .icon {
            margin-bottom: -4px;
            animation: shake 4s infinite;
        }

        &:active,
        &:hover {
            transform: scale(1.1);
        }
    }

    .about-me {
        font-size: 1.25em;
        line-height: 1.5;

        img {
            width: 100%;
            max-width: 20em;
            margin: 0 auto;
        }
    }

    .license {
        font-size: 90%;
        line-height: 1.5;
        padding-top: 5em;
        opacity: 0.8;

        section {
            font-family: monospace;
            max-width: 600px;
        }
    }
}

@media (min-width: 35em) {
    .float-pic {
        float: left;
        margin: 0 1em 0.25em 0 !important;
    }
}
</style>
