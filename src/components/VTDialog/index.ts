import { reactive } from "vue"

export interface Dialog {
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

class VTDialogProvider {
    dialog: Dialog = reactive({
        type: 'info', isShow: false, message: 'Are You Sure?', title: 'Delete',
        buttonCloseText: 'Close', buttonOkeyText: 'Ok'
    } as Dialog)

    private showDialog(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string, type: DialogType = 'info') {
        this.dialog.message = message;
        this.dialog.title = title;
        this.dialog.data = data;
        this.dialog.type = type;
        if (buttonCloseText != null) {
            this.dialog.buttonCloseText = buttonCloseText;
        }
        if (buttonOkeyText != null) {
            this.dialog.buttonOkeyText = buttonOkeyText;
        }
        this.dialog.isShow = true
    }

    show(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'info');
    };

    info(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'info');
    };
    success(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'success');
    };
    delete(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'error');
    };
    warning(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'warning');
    };
    onHandler(handler: Function) {
        this.dialog.onOkeyClick = handler;
    }
}

export const VTDialogService = new VTDialogProvider();