<template>
    <div class="mb-5">
        <title>{{ subtitle }}</title>
        <div class="mb-1 w-auto text-2xl font-semibold uppercase text-pink-600">{{ title }}</div>
        <hr class="w-full h-px dark:bg-gray-500 border-0 mb-1">
        <div v-if="subtitle" class="mb-4 w-auto text-lg font-semibold ">{{ subtitle }}</div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: { type: String },
    subtitle: { type: String }
})

</script>