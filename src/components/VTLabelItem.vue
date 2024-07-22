<template>
    <div class="flex flex-col justify-start md:flex-row items-start mb-4 capitalize text-sm">
        <div class="md:w-40 mb-1 font-bold md:mb-0 text-gray-700 dark:text-slate-300">{{ props.labelText }}</div>
        <div class="flex flex-row items-center justify-center text-gray-700 dark:text-slate-300">
            <span class="mx-3 hidden md:block">:</span>{{ props.value }}
        </div>
    </div>
</template>

<script setup lang="ts">

type LabelType = 'row' | 'col'

const props = withDefaults(defineProps<{
    labelText: string,
    value: string,
    labelType?: LabelType
}>(), {labelType: 'row'})


</script>