import { reactive, ref, type Ref } from "vue"

export interface Dialog {
    data?: any,
    title: string,
    message: string,
    buttonOkeyText?: string,
    buttonCloseText?: string,
    isShow: boolean,
    onOkeyClick?: any,
    onCancelClick?: any,
    type: DialogType
}

export type DialogType = 'success' | 'info' | 'warning' | 'danger'

class VTDialogProvider {
    dialog: Dialog = reactive({
        type: 'info', message: 'Are You Sure?', title: 'Delete', isShow: false,
        buttonCloseText: 'Close', buttonOkeyText: 'Ok'
    });

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


    asyncShowDialog(title: string, message: string, data?: any, type: DialogType = 'info', buttonCloseText?: string, buttonOkeyText?: string): Promise<any> {
        this.dialog.isShow = true
        return new Promise((resolve, reject) => {
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

            this.dialog.onOkeyClick = (() => {
                resolve(data)
            })

            this.dialog.onCancelClick = (() => {
                reject()
            })
        }
        );
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
    danger(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'danger');
    };
    warning(title: string, message: string, data?: any, buttonCloseText?: string, buttonOkeyText?: string) {
        this.showDialog(title, message, data, buttonCloseText, buttonOkeyText, 'warning');
    };
    onHandler(handler: Function) {
        this.dialog.onOkeyClick = handler;
    }
}

export const VTDialogService = new VTDialogProvider();