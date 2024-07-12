import { useDialogStore } from "@/stores/dialogStore";

export default interface Dialog {
    data?: any,
    title: string,
    message: string,
    buttonOkeyText?: string,
    buttonCloseText?: string,
    isShow: Boolean,
    onOkeyClick?: any,
    type: DialogType
}

export type DialogType = 'success' | 'info' | 'warning' | 'error'


const showDialog = (title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string, type: DialogType = 'info') => {
    const dialogStore = useDialogStore()
    const dialog = dialogStore.dialog;
    dialog.message = message;
    dialog.title = title;
    dialog.data = data;
    dialog.type = type;
    if (buttonCloseText != null) {
        dialog.buttonCloseText = buttonCloseText;
    }
    if (buttonOkeyText != null) {
        dialog.buttonOkeyText = buttonOkeyText;
    }
    dialog.isShow = true
}

export const DialogService = {
    show: (title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) => {
        showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'info');
    },

    info: (title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) => {
        showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'info');
    },
    success: (title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) => {
        showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'success');
    },
    delete: (title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) => {
        showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'error');
    },
    warning: (title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) => {
        showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'warning');
    },

    onHandler: (handler: Function) => {
        const dialogStore = useDialogStore()
        const dialog = dialogStore.dialog;
        dialog.onOkeyClick = handler;
    }
}