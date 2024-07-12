import { useToastStore } from "@/stores/toastStore";

export type ToastAlign = 'start' | 'center' | 'end';
export type ToastType = 'success' | 'warning' | 'danger' | 'empty';

export default interface ToastItem {
    id: number;
    type: ToastType;
    alignment: ToastAlign;
    closable: boolean,
    message: string,
    divide: boolean
}

export const ToastService = {
    error: (message: string, duration: number = 2500, closable: boolean = true, divide: boolean = true) => {
        const toast = useToastStore();
        toast.showToast(message, "danger", duration, closable, divide)
    },
    info: (message: string, duration: number = 2500, closable: boolean = true, divide: boolean = true) => {
        const toast = useToastStore();
        toast.showToast(message, "empty", duration, closable, divide)
    },
    warning: (message: string, duration: number = 2500, closable: boolean = true, divide: boolean = true) => {
        const toast = useToastStore();
        toast.showToast(message, "warning", duration, closable, divide)
    },
    success: (message: string, duration: number = 2500, closable: boolean = true, divide: boolean = true) => {
        const toast = useToastStore();
        toast.showToast(message, "success", duration, closable, divide)
    }
}

