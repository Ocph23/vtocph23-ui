import { defineStore } from 'pinia'
import type ToastItem from '../components/VTToast'

export const useToastStore = defineStore('toast', {
  state: () => {
    return { toasts: [] as ToastItem[] }
  },
  actions: {
    showToast(message: string, type: string, duration: number = 2500, closable: boolean, divide: boolean) {
      const toas = { closable, divide, message, type } as ToastItem;
      this.toasts.push(toas);
      setTimeout(() => {
        const index = this.toasts.indexOf(toas);
        this.toasts.splice(index, 1);
      }, duration);
    },
  }
})