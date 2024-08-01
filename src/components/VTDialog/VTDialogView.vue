<template>
    <div v-if="VTDialogService.dialog.isShow">
        <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" />
        <div ref="modalRef" class="fixed inset-0 z-50 " tabindex="0" @click.self="clickOutside"
            @keyup.esc="closeWithEsc">
            <div :class="[modalSizeClasses[size], modalPositionClasses[position]]" class="absolute p-4 w-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="p-4 rounded-t flex justify-between items-center ">
                        <span class=" dark:text-white text-lg font-semibold"> {{ VTDialogService.dialog.title }}</span>
                        <button v-if="!persistent" aria-label="close"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            type="button" @click="closeModal">
                            <slot name="close-icon">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        fill-rule="evenodd" />
                                </svg>
                            </slot>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div :class="$slots.header ? '' : 'pt-0'" class="flex items-center p-6 text-black dark:text-white">
                        <div class="rounded-full shadow-2xl p-3 m-3 w-auto"
                            :class="VTDialogService.dialog.type == 'warning' ? ' bg-[#e3a008]' : VTDialogService.dialog.type == 'info' ? ' bg-[#1c64f2]' : VTDialogService.dialog.type == 'success' ? 'bg-[#057a55]' : VTDialogService.dialog.type == 'question' ? ' bg-[#e3a008]' : 'bg-[#e02424]'">
                            <IconDetail size="xl" v-if="VTDialogService.dialog.type == 'info'" />
                            <IconCheck size="xl" v-else-if="VTDialogService.dialog.type == 'success'" />
                            <IconQuestion size="xl" v-else-if="VTDialogService.dialog.type == 'question'" />
                            <IconExclamationTriangle size="xl" v-else />
                        </div>
                        <span class="dark:text-white"> {{ VTDialogService.dialog.message }}</span>
                    </div>
                    <!-- Modal footer -->
                    <div class="py-3 px-6 rounded-b border-gray-200 border-t dark:border-gray-600">
                        <div class="flex justify-end gap-2">
                            <fwb-button class="w-28" @click="closeModal" color="alternative">
                                {{ VTDialogService.dialog.buttonCloseText }}
                            </fwb-button>
                            <fwb-button class="w-28" @click="okey" :color="getColor">
                                {{ VTDialogService.dialog.buttonOkeyText }}
                            </fwb-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FwbButton } from 'flowbite-vue'
import { computed } from 'vue';
import { VTDialogService } from '.';
import { onMounted, ref, type Ref } from 'vue'
import IconDetail from '@/icons/IconDetail.vue';
import IconExclamationTriangle from '@/icons/IconExclamationTriangle.vue';
import IconCheck from '@/icons/IconCheck.vue';
import IconQuestion from '@/icons/IconQuestion.vue';

interface ModalProps {
    notEscapable?: boolean
    persistent?: boolean
    size?: ModalSize
    position?: ModalPosition
}

const props = withDefaults(defineProps<ModalProps>(), {
    notEscapable: true,
    persistent: true,
    size: 'md',
    position: 'center'
})

const emit = defineEmits(['close', 'click:outside'])
const modalSizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
}

const modalPositionClasses = {
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-center': 'bottom-0 left-1/2 transform -translate-x-1/2',
    'top-left': 'top-0 left-0',
    'top-center': 'top-0 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-0 right-0',
    'center-left': 'top-1/2 left-0 transform -translate-y-1/2',
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'center-right': 'top-1/2 right-0 transform -translate-y-1/2'
}
function clickOutside() {
    if (!props.persistent) {
        emit('click:outside')
        closeModal()
    }
}

function closeWithEsc() {
    if (!props.notEscapable && !props.persistent) closeModal()
}
const modalRef: Ref<HTMLElement | null> = ref(null)
onMounted(() => {
    if (modalRef.value) {
        modalRef.value.focus()
    }
})

type ModalPosition =
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

function okey() {
    if (VTDialogService.dialog.onOkeyClick) {
        VTDialogService.dialog.onOkeyClick(VTDialogService.dialog.data);
    }
    VTDialogService.dialog.isShow = false;
};

function closeModal() {
    emit('close');
    if (VTDialogService.dialog.onCancelClick) {
        VTDialogService.dialog.onCancelClick();
    }
    VTDialogService.dialog.isShow = false;
};

const getColor = computed(() => {
    if (VTDialogService.dialog.type === 'success') {
        return 'green';
    } else if (VTDialogService.dialog.type === 'warning') {
        return 'yellow';
    } else if (VTDialogService.dialog.type === 'danger') {
        return 'red';
    } else if (VTDialogService.dialog.type === 'question') {
        return 'yellow';
    } else {
        return 'blue';
    }
})



</script>