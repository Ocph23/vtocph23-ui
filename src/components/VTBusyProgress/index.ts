import { useBusyProgressStore } from "@/stores/busyStore";
import type { Ref } from "vue";

export default interface BusyProgress {
    name?: string,
    start: Function,
    continue: Function,
    stop: Function,
}

export const BusyProgressService = {
    start: async (isBusy?: Ref<boolean>) => {
        const progressStore = useBusyProgressStore();
        await progressStore.start();
        if (isBusy) {
            isBusy.value = true;
        }
    },
    continue: async () => {
        const progressStore = useBusyProgressStore();
        await progressStore.continue();
    },
    stop: async (isBusy?: Ref<boolean>) => {
        const progressStore = useBusyProgressStore();
        await progressStore.stop();
        if (isBusy) {
            setTimeout(() => {
                isBusy.value = false;
            }, 500);
        }
    },
}