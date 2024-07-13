<template>
    <FwbProgress :progress="progress" v-if="isBusy" size="sm" class="absolute w-full z-[100] mb-[.05rem]" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { FwbProgress } from 'flowbite-vue';
import { VTBusyProgressService } from '../VTBusyProgress/index';

const isBusy = ref(false);
const progress = ref(0);
const isPending = ref(false);
const dontPending = ref(false);
const bar = ref(1);
const dataProgress = VTBusyProgressService.progressStore;

watch(isPending, (newValue) => {
    if (!newValue && progress.value >= 80 && progress.value < 100) {
        continueProgress();
    }
});

const startProgress = () => {
    progress.value = 0;
    isBusy.value = true;
    return new Promise<void>((resolve) => {
        if (progress.value < 80) {
            const interval = setInterval(() => {
                if (progress.value < 80) {
                    progress.value += bar.value;
                } else if (!dontPending.value) {
                    isPending.value = true;
                    clearInterval(interval);
                    resolve();
                } else {
                    progress.value += bar.value;
                    if (progress.value >= 100) {
                        clearInterval(interval);
                        isBusy.value = false;
                        resolve();
                    }
                }
            }, 20);
        } else if (progress.value >= 80 && progress.value < 100) {
            resolve();
        }
    });
}

const continueProgress = () => {
    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += bar.value;
        } else {
            progress.value = 0;
            isBusy.value = false;
            clearInterval(interval);
        }
    }, 20);
}

const stop = () => {
    dontPending.value = true;
    bar.value = 3;
}

dataProgress.start = startProgress;
dataProgress.continue = continueProgress;
dataProgress.stop = stop;
</script>