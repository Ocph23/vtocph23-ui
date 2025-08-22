<script setup lang="ts">
import { computed } from 'vue';
import VTToolTip from './VTToolTip.vue';

export type StatusType = 'info' | 'success' | 'danger' | 'warning';

const props = defineProps<{ text?: String, type: StatusType, tooltip?: String, class?: String }>()

const bgClass = computed(() => {

    let style = "bg-neutral-300 dark:bg-neutral-700";
    switch (props.type) {
        case 'success':
            style = "bg-green-500 dark:bg-green-600";
            break;
        case 'danger':
            style = "bg-red-500 dark:bg-red-600";
            break;
        case 'warning':
            style = "bg-amber-500 dark:bg-amber-600";
            break;
        case 'info':
            style = "bg-blue-500 dark:bg-blue-600";
            break;
    }
    return style;
})

</script>
<template>
    <VTToolTip>
        <template #trigger>
            <div :class="[bgClass, 'p-1 px-3 rounded-2xl w-auto flex flex-row items-center justify-center']">
                <slot name="icon"></slot>
                <span class="text-md text-white capitalize">
                    <slot v-if="$slots.text" name="text"></slot>
                    <span v-else>
                        {{ props.text }}
                    </span>
                </span>
            </div>
        </template>
        <template #content>
            <div class="text-white">
                {{ props.tooltip }}
            </div>
        </template>
    </VTToolTip>
</template>