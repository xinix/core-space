<script lang="ts" setup>
import BackButton from '@/components/buttons/BackButton.vue'
import FormField from '@/components/forms/FormField.vue'
import ThemeOption from '@/components/forms/ThemeOption.vue'
import ProductSelector from '@/components/forms/ProductSelector.vue'
import ProgressBar from '@/components/forms/ProgressBar.vue'

import { useTheme } from '@/stores/theme'
import { useProducts } from '@/stores/products'
import { useTokens } from '@/stores/tokens'

const tokens = useTokens()
const theme = useTheme()
const products = useProducts()

const onSave = (ev: SubmitEvent) => {
    theme.save()
    theme.apply()
    products.save()
    tokens.load(products.active)
    return ev
}
</script>

<template>
    <div class="settings">
        <header>
            <BackButton class="btn" />
            <h1>
                <span class="material-symbols-rounded">Settings</span>
                {{ $t('preferences') }}
            </h1>
        </header>

        <form @submit.prevent="onSave">
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
                        @update:model-value="onSave"
                    />
                </template>
            </FormField>

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
        </form>
    </div>
</template>

<style lang="scss" scoped>
.settings {
    max-width: 1400px;
    margin: 1em auto;

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
}
</style>
