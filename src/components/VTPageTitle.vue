<template>
    <title>{{ subtitle }}</title>
    <div class="mb-4 w-auto text-2xl font-semibold uppercase">{{ title }}</div>
    <hr class="w-full h-px dark:bg-gray-500 border-0 mb-5">
</template>

<script setup lang="ts">
import { onMounted, readonly } from 'vue';

let props = defineProps({
    title: { type: String },
    subtitle: { type: String }
})

onMounted(() => {
})

</script>