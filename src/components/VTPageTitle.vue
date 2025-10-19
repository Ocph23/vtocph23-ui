<template>
    <div class="mb-5">
        <title>{{ subtitle }}</title>
        <div :class="size == 'lg' ? 'text-2xl' : size == 'md' ? ' text-xl' : 'text-lg'"
            class="mb-1 w-auto dark:text-gray-300 text-gray-600 font-semibold uppercase">{{ title }}</div>
        <hr class="w-full h-px dark:bg-gray-500 bg-gray-300 border-0 mb-1">
        <div v-if="subtitle" :class="size == 'lg' ? 'text-lg' : size == 'md' ? ' text-md' : 'text-sm'"
            class="mb-4 w-auto text-lg font-semibold dark:text-gray-300 text-gray-600">{{ subtitle }}
        </div>
    </div>
</template>

<script setup lang="ts">

type sizeType = 'sm' | 'md' | 'lg';



interface IPageTitleProps {
    title?: string
    underline?: boolean
    size?: sizeType
    subtitle: string
}

const props = withDefaults(defineProps<IPageTitleProps>(), {
    title: '',
    underline: true,
    size: 'lg',
    subtitle: '',
})


</script>