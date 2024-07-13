import './assets/main.css';
import './components/index.ts'

//commond
export { default as VTInput, default as VTInputCurrency } from "./components/VTInput/VTInput.vue";
export { default as VTSelect } from "./components/VTSelect/VTSelect.vue";
export { default as VTAutocomplete } from "./components/VTAutocomplete.vue";
export { default as VTButtonAction } from "./components/VTButtonAction.vue";
export { default as VTButtonSave } from "./components/VTButtonSave/VTButtonSave.vue";
export { default as VTCard } from "./components/VTCard.vue";
export { default as VTInputErrorMessage } from "./components/VTInputErrorMessage.vue";
export { default as VTModal } from "./components/VTModal.vue";
export { default as VTPageTitle } from "./components/VTPageTitle.vue";
export { default as VTSidebarDropdown } from "./components/VTSidebarDropdown.vue";
export { default as VTSidebarItem } from "./components/VTSidebarItem.vue";
export { default as VTSyncStatus } from "./components/VTSyncStatus.vue";
export { default as VTToolTip } from "./components/VTToolTip.vue";
export { default as VTWrapText } from "./components/VTWrapText.vue";


//utlis
export { default as VTBusyProgress } from "./components/VTBusyProgress/VTBusyProgress.vue";
export { default as VTDialog } from "./components/VTDialog/VTDialogView.vue";
export { default as VTToasView } from "./components/VTToast/VTToastView.vue";

//service
export type { default as BusyProgressService, default as BusyProgress } from "./components/VTBusyProgress/index";
export type { default as DialogService, default as Dialog, default as DialogType } from "./components/VTDialog/index";
export type { default as ToastItem, default as ToasService, } from "./components/VTToast/index";

///Icon
export { default as VTIconCheck } from "./icons/IconCheck.vue"
export { default as VTIconDelete } from "./icons/IconDelete.vue";
export { default as VTIconDetail } from "./icons/IconDetail.vue";
export { default as VTIconEdit } from "./icons/IconEdit.vue";
export { default as VTIconList } from "./icons/IconList.vue"
export { default as VTIconPlus } from "./icons/IconPlus.vue"
export { default as VTIconPrint } from "./icons/IconPrint.vue";
export { default as VTIconDosen } from "./icons/IconDosen.vue";
export { default as VTIconCopy } from "./icons/IconCopy.vue";
export { default as VTIconCalculator } from "./icons/IconCalculator.vue";
export { default as VTIconSubmenu } from "./icons/IconSubmenu.vue";
export { default as VTIconLeftArrow } from "./icons/IconLeftArrow.vue";
export { default as VTIconPelengkap } from "./icons/IconPelengkap.vue";
export { default as VTIconRekapitulasi } from "./icons/IconRekapitulasi.vue";
export { default as VTIconCommunity } from "./icons/IconCommunity.vue";
export { default as VTIconDocumentation } from "./icons/IconDocumentation.vue";
export { default as VTIconEcosystem } from "./icons/IconEcosystem.vue";
export { default as VTIconMahasiswa } from "./icons/IconMahasiswa.vue";
export { default as VTIconPerkuliahan } from "./icons/IconPerkuliahan.vue";
export { default as VTIconRole } from "./icons/IconRole.vue";
export { default as VTIconProfile } from "./icons/IconProfile.vue";
export { default as VTIconSearch } from "./icons/IconSearch.vue";
export { default as VTIconSupport } from "./icons/IconSupport.vue";
export { default as VTIconTooling } from "./icons/IconTooling.vue";
export { default as VTIconSave } from "./icons/IconSave.vue";
export { default as VTIconGear } from "./icons/IconGear.vue";
export { default as VTIconDoubleCheck } from "./icons/IconDoubleCheck.vue";
export { default as VTIconTime } from "./icons/IconTime.vue";