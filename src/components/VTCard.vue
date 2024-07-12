<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-full mb-4">
        <div class="p-5 ">
            <div class="mb-8 md:flex md:flex-row justify-between">
                <h1 v-if="title" class=" uppercase text-xl font-semibold">{{ title }}</h1>
                <slot name="right-side" />
            </div>
            <slot />
        </div>
        <hr v-if="$slots.footerSide" class="border-gray-500 border-t-[.9px]">
        <div class="flex justify-center py-3">
            <slot name="footerSide" />
        </div>
    </div>
</template>


<script setup lang="ts">
defineProps(['title'])
</script>