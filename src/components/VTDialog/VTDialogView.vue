<template>
    <VTModal size="lg" v-if="VTDialogService.dialog.isShow" @close="closeModal" persistent>
        <template #header>
            {{ VTDialogService.dialog.title }}
        </template>
        <template #body>
            {{ VTDialogService.dialog.message }}
        </template>
        <template #footer>
            <div class="flex justify-end gap-2">
                <fwb-button class="w-28" @click="closeModal" color="alternative">
                    {{ VTDialogService.dialog.buttonCloseText }}
                </fwb-button>
                <fwb-button class="w-28" @click="okey" :color="getColor">
                    {{ VTDialogService.dialog.buttonOkeyText }}
                </fwb-button>
            </div>
        </template>
    </VTModal>
</template>

<script lang="ts" setup>
import { FwbButton } from 'flowbite-vue'
import VTModal from '../VTModal.vue';
import { computed } from 'vue';
import { VTDialogService } from '.';


function okey() {
    VTDialogService.dialog.isShow = false;
    VTDialogService.dialog.onOkeyClick(VTDialogService.dialog.data);
};

function closeModal() {
    VTDialogService.dialog.isShow = false;
};

const getColor = computed(() => {
    if (VTDialogService.dialog.type === 'success') {
        return 'green';
    } else if (VTDialogService.dialog.type === 'warning') {
        return 'yellow';
    }
    else if (VTDialogService.dialog.type === 'error') {
        return 'red';
    } else {
        return 'blue';
    }
})



</script>