<script setup lang="ts">
import { computed } from 'vue';
import VTToolTip from './VTToolTip.vue';

export type StatusType = 'info' | 'success' | 'danger' | 'warning';

const props = defineProps<{ text: String, type: StatusType, tooltip?: String }>()

const bgClass = computed(() => {
    switch (props.type) {
        case 'success':
            return "bg-green-500 dark:bg-green-600";
        case 'danger':
            return "bg-red-500 dark:bg-red-600";
        case 'warning':
            return "bg-amber-500 dark:bg-amber-600";
        case 'info':
            return "bg-blue-500 dark:bg-blue-600";
        default:
            return "";
    }
})

</script>
<template>
    <VTToolTip>
        <template #trigger>
            <div :class="[bgClass, 'p-1 px-3 rounded-2xl w-auto flex flex-row items-center justify-center']">
                <slot name="icon"></slot>
                <span class="text-md text-white capitalize">{{ props.text }}</span>
            </div>
        </template>
        <template #content>
            <div class="text-white">
                {{ props.tooltip }}
            </div>
        </template>
    </VTToolTip>
</template>