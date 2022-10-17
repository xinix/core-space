<script lang="ts" setup>
defineProps<{ label: string; name: string }>()
</script>

<template>
    <div class="form-field">
        <div class="form-label">
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
