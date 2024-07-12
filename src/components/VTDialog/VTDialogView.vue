<template>
    <VTModal size="lg" v-if="dialog.isShow" @close="closeModal" persistent>
        <template #header>
            {{ dialog.title }}
        </template>
        <template #body>
            {{ dialog.message }}
        </template>
        <template #footer>
            <div class="flex justify-end gap-2">
                <fwb-button class="w-28" @click="closeModal" color="alternative">
                    {{ dialog.buttonCloseText }}
                </fwb-button>
                <fwb-button class="w-28" @click="okey" :color="getColor">
                    {{ dialog.buttonOkeyText }}
                </fwb-button>
            </div>
        </template>
    </VTModal>
</template>

<script lang="ts" setup>
import { FwbButton } from 'flowbite-vue'
import VTModal from '../VTModal.vue';
import { computed } from 'vue';
import { useDialogStore } from '@/stores/dialogStore';
import type Dialog from '.';

const dialogStore = useDialogStore();
const dialog: Dialog = dialogStore.dialog;

function okey() {
    dialog.isShow = false;
    dialog.onOkeyClick(dialog.data);
};

function closeModal() {
    dialog.isShow = false;
};

const getColor = computed(() => {
    if (dialog.type === 'success') {
        return 'green';
    } else if (dialog.type === 'warning') {
        return 'yellow';
    }
    else if (dialog.type === 'error') {
        return 'red';
    } else {
        return 'blue';
    }
})



</script>