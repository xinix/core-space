<script lang="ts" setup>
withDefaults(defineProps<{ label?: string; name: string }>(), { label: '' })
</script>

<template>
    <div class="form-field">
        <div v-if="label" class="form-label">
            <label :for="name">
                {{ $t(label) }}
            </label>
            <slot name="label" />
        </div>
        <div class="form-control">
            <slot />
        </div>
    </div>
</template>
