import { reactive } from 'vue';
export type ToastAlign = 'start' | 'center' | 'end';
export type ToastType = 'success' | 'warning' | 'danger' | 'empty';

export interface ToastItem {
    id: number;
    type: ToastType;
    alignment: ToastAlign;
    closable: boolean,
    message: string,
    divide: boolean
}


class ToastProvider {
    toasts = reactive<ToastItem[]>([]);
    showToast(message: string, type: string, duration: number = 0, closable: boolean = true, divide: boolean) {
        const toas = { closable, divide, message, type } as ToastItem;
        this.toasts.push(toas);
        if(!closable){
            setTimeout(() => {
                const index = this.toasts.indexOf(toas);
                this.toasts.splice(index, 1);
            }, duration);
        }
    }

    error(message: string, duration: number = 5000, closable: boolean = false, divide: boolean = true) {
        this.showToast(message, "danger", duration, closable, divide)
    }

    info(message: string, duration: number = 5000, closable: boolean = false, divide: boolean = true) {
        this.showToast(message, "empty", duration, closable, divide)
    }

    warning(message: string, duration: number = 5000, closable: boolean = false, divide: boolean = true) {
        this.showToast(message, "warning", duration, closable, divide)
    }

    success(message: string, duration: number = 5000, closable: boolean = false, divide: boolean = true) {
        this.showToast(message, "success", duration, closable, divide)
    }

    removeToast(id: number) {
        const x = this.toasts.find(toast => toast.id == id);
        if (x) {
            this.toasts.splice(this.toasts.indexOf(x), 1);
        }
    }
}

export const VTToastService = new ToastProvider();



