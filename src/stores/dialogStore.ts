import type Dialog from '../components/VTDialog'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => {
    return {
      dialog: {
        type: 'info', isShow: false, message: 'Are You Sure?', title: 'Delete',
        buttonCloseText: 'Close', buttonOkeyText: 'Ok'
      } as Dialog
    }
  },
})

