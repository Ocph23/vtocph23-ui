<template>
    <div class="mb-5">
        <title>{{ subtitle }}</title>
        <div class="mb-1 w-auto text-2xl dark:text-gray-300 text-gray-600 font-semibold uppercase">{{ title }}</div>
        <hr class="w-full h-px dark:bg-gray-500 bg-gray-300 border-0 mb-1">
        <div v-if="subtitle" class="mb-4 w-auto text-lg font-semibold dark:text-gray-300 text-gray-600">{{ subtitle }}</div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: { type: String },
    subtitle: { type: String }
})

</script>