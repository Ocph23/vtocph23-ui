<template>
    <div class="w-auto mr-0 lg:mr-1 hp:max-md:mb-4 lg:mb-0  ">
        <a :href="url" @click="click" class="flex items-center cursor-pointer" :class="styleClass">
            <slot v-if="$slots.default" />
            <VTIconDetail v-else-if="props.type === 'detail'" />
            <VTIconEdit v-else-if="props.type === 'edit'" />
            <VTIconDelete v-else-if="props.type === 'delete'" />
        </a>
    </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { VTIconDelete, VTIconDetail, VTIconEdit } from '..';

const props = defineProps<{ url?: string, data?: any, style?: ButtonActionType, type?: ButtonIconType, class?: string }>();
const emit = defineEmits(['click'])

// const slots = useSlots()

function click() {
    emit('click', props.data)
}


const styleClass = computed(() => {
    let css = "bg-blue-500 text-white px-[8px] py-[8px] rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    switch (props.style) {
        case 'success':
            css = " bg-teal-500 text-white px-[8px] py-[8px] rounded-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            break;
        case 'danger':
            css = " bg-red-500 text-white px-[8px] py-[8px] rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            break;

        case 'warning':
            css = "bg-amber-500 text-white px-[8px] py-[8px] rounded-full hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
            break;

        case 'info':
            css = "bg-blue-500 text-white px-[8px] py-[8px] rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            break;
        case 'default':
            css = "bg-blue-500 text-white px-[8px] py-[8px] rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            break;
        default:
            break;
    }
    return css + " " + props.class;
});


export type ButtonActionType = 'success' | 'danger' | 'warning' | 'default' | 'info'
export type ButtonIconType = 'delete' | 'edit' | 'default' | 'detail'


</script>