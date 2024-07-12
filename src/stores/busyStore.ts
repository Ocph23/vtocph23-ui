import { defineStore } from 'pinia'
import type BusyProgress from '@/components/VTBusyProgress';

export const useBusyProgressStore = defineStore('busyProgress', {
  state: () => {
    return { progress: { start: () => { }, continue: () => { }, stop: () => { } } as BusyProgress }
  },
  actions: {
    start() {
      this.progress.start();
    },
    continue() {
      this.progress.continue();

    },
    stop() {
      this.progress.stop();
    },


  }
})

