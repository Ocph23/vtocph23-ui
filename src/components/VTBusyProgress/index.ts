import type { Ref } from "vue";

export interface BusyProgress {
    name?: string,
    start: Function,
    continue: Function,
    stop: Function,
}

class VTBusyProgress {
    progressStore: BusyProgress = {} as BusyProgress;
    async start(isBusy?: Ref<boolean>) {
        await this.progressStore.start();
        if (isBusy) {
            isBusy.value = true;
        }
    }
    async continue() {
        await this.progressStore.continue();
    }
    async stop(isBusy?: Ref<boolean>) {
        await this.progressStore.stop();
        if (isBusy) {
            setTimeout(() => {
                isBusy.value = false;
            }, 500);
        }
    }
}

export const VTBusyProgressService = new VTBusyProgress();