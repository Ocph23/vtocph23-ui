<template>
    <div class="card-container">
        <img :src="src" alt="Profile Picture">
        <div class="card-body">
            <div class="card-name">{{ name }}</div>
            <p class="card-title">{{ title }}</p>
        </div>
        <div class="card-footer">
            <span class="card-desc">{{ description }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
    src: string
    name: string
    title?: string
    description?: string
}

const props = defineProps<Props>()
</script>

<style scoped>
img {
    @apply w-full h-60 object-cover bg-gray-400;
    object-position: top;
}

.card-container {
    @apply max-w-sm rounded overflow-hidden bg-transparent transition-all ease-in-out duration-300 delay-75 hover:shadow-lg hover:scale-105
}

.card-body {
    @apply px-3 py-4
}

.card-name {
    @apply font-bold text-xl mb-2
}

.card-title {
    @apply text-gray-700 dark:text-gray-300 text-start text-base
}

.card-footer {
    @apply px-3 text-start pb-2
}

.card-desc {
    @apply text-gray-600 dark:text-gray-400 text-sm
}
</style>