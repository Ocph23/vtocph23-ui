<template>
  <label class="block mb-2 text-sm font-medium" :class="[labelClasses]">{{ props.label }}<span v-if="validation"
      class="text-rose-500 text-lg" >*</span></label>
  <div class="relative mb-2" ref="dropdown">
    <div class="relative">
      <input :class="[inputClasses]" type="text" v-model="internalQuery" @input="filterList"
        :placeholder="props.placeholder" @keyup="onFocus" @keyup.esc="closeFocus" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="onClickDropdown" fill="currentColor"
        class="w-3 h-3 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <path
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      <svg v-if="internalQuery" @click="clearSelection" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
        fill="currentColor"
        class="w-3 h-3 absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
        <path
          d="M242.72 256l100.07-100.07c12.5-12.5 12.5-32.76 0-45.26l-22.63-22.63c-12.5-12.5-32.76-12.5-45.26 0L175.12 188.1 75.05 88.03c-12.5-12.5-32.76-12.5-45.26 0L7.16 110.66c-12.5 12.5-12.5 32.76 0 45.26L107.23 256 7.16 356.07c-12.5 12.5-12.5 32.76 0 45.26l22.63 22.63c12.5 12.5 32.76 12.5 45.26 0L175.12 323.9l100.07 100.07c12.5 12.5 32.76 12.5 45.26 0l22.63-22.63c12.5-12.5 12.5-32.76 0-45.26L242.72 256z" />
      </svg>
    </div>
    <p v-if="props.validation && props.validation.$error">
      <FwbInputErrorMessage :messages="props.validation.$errors" />
    </p>
    <ul v-if="showOptions && filteredList.length" @keyup.esc="closeFocus"
      class=" absolute p-2 origin-top-right right-0 mt-2 w-full rounded-md shadow-lg bg-gray-100 dark:bg-gray-600 ring-1 ring-black ring-opacity-5 z-[1000]">
      <li v-for="(item, index) in filteredList.slice(0, 10)" :key="index" @click="selectItem(item)"
        class="p-2 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:text-gray-200 cursor-pointer font-medium timbul">
        <span>
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'
import FwbInputErrorMessage from './VTInputErrorMessage.vue'
import type { SelectOption } from '.';

const props = withDefaults(
  defineProps<{
    modelValue?: any
    sources: Array<SelectOption>
    placeholder?: string
    validationStatus?: boolean
    label?: string
    validation?: any
    disabled?: boolean
  }>(),
  { placeholder: 'Cari . . .' }
)


const internalQuery = ref('')
let filteredList: SelectOption[] = reactive([])
const emit = defineEmits(['update:modelValue', 'change', 'search'])
const query = useVModel(props, 'modelValue', emit)
const showOptions = ref(false)
const dropdown = ref<HTMLElement | null>(null);

onMounted(() => {

})

watch(query, (newValue: any) => {
  if (newValue) {
    if (props.modelValue) {
      var data = props.sources.find((x) => x.value == newValue)
      selectItem(data as SelectOption)
    }
  }
})

const filterList = () => {
  const searchQuery = internalQuery.value.toLowerCase()
  emit("search", searchQuery)
  filteredList = props.sources.filter((item) => item.name.toLowerCase().includes(searchQuery))
}

const onClickDropdown = () => {
  showOptions.value = !showOptions.value
  const searchQuery = internalQuery.value.toLowerCase()
  if (searchQuery) {
    filteredList = props.sources.filter((item) => item.name.toLowerCase().includes(searchQuery))
  } else {
    filteredList = props.sources;
  }
}

const onFocus = () => {
  showOptions.value = true
  emit('update:modelValue', null)
  emit('change', null)
  if (showOptions.value) {
    const searchQuery = internalQuery.value.toLowerCase()
    if (searchQuery.length) {
      filteredList = props.sources.filter((item) => item.name.toLowerCase().includes(searchQuery))
    } else {
      filteredList = props.sources;
    }
  } else {
    filteredList = props.sources;
  }
}

const closeFocus = () => showOptions.value = false

const selectItem = (item: SelectOption) => {
  if (item) {
    internalQuery.value = item.name
    query.value = item.value
    filteredList = []
    emit('update:modelValue', item.value)
    emit('change', item)
    // showOptions.value = false
  }
}

const clearSelection = () => {
  internalQuery.value = ''
  filteredList = props.sources;
  query.value = null
  emit('update:modelValue', null)
  emit('change', null)
  showOptions.value = true
}

// Close option when click outside VTAutocomplete component area 
const handleClickOutside = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    closeFocus();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

watch(showOptions, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});

// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
const defaultInputClasses =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const disabledInputClasses = 'cursor-not-allowed bg-gray-100'

const successInputClasses =
  'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorInputClasses =
  'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

const inputClasses = computed(() => {
  let classByStatus = defaultInputClasses
  if (props.validation) {
    const vsx = props.validation.$error
    classByStatus = vsx ? errorInputClasses : successInputClasses
  }

  return twMerge(defaultInputClasses, classByStatus, props.disabled ? disabledInputClasses : '')
})

const labelClasses = computed(() => {
  let classByStatus = 'text-gray-900 dark:text-white'
  if (props.validation) {
    const vsx = props.validation.$error
    classByStatus = vsx ? 'text-red-700 dark:text-red-500' : 'text-green-700 dark:text-green-500'
  }

  return twMerge(baseLabelClasses, classByStatus)
})
</script>

<style scoped>
:root {
  --box-shadow-light: 6px 6px 12px #e9eaec, -6px -6px 12px #fdfeff;
  --box-shadow-dark: 6px 6px 12px #47505d, -6px -6px 12px #505a69;
  --background-color-light: #f3f4f6;
  --background-color-dark: #4b5563;
}

@media (prefers-color-scheme: dark) {
  :root {
    --box-shadow-current: var(--box-shadow-dark);
    --background-color-current: var(--background-color-dark);
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --box-shadow-current: var(--box-shadow-light);
    --background-color-current: var(--background-color-light);
  }
}

.timbul:hover {
  margin: 1px 5px;
  border-radius: 12px;
  background: var(--background-color-current);
  box-shadow: var(--box-shadow-current);
}
</style>
