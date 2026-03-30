<template>
  <label class="block mb-2 text-sm font-medium" :class="[labelClasses]">{{ props.label }}<span v-if="validation"
      class="text-rose-500 text-lg">*</span></label>
  <div class="relative mb-2" ref="dropdown">
    <div class="relative">
      <!-- Selected items chips for multi-select -->

      <input :class="[inputClasses]"
        :style="{ 'padding-right': props.multiple && selectedItems.length > 0 ? '3rem' : '3.5rem' }" type="text"
        v-model="internalQuery" @input="filterList" @focus="onFocus" autocomplete="off" autocorrect="off"
        autocapitalize="off" spellcheck="false"
        :placeholder="props.multiple && selectedItems.length > 0 ? '' : props.placeholder" @keyup.esc="closeFocus" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="onClickDropdown" fill="currentColor"
        class="w-3 h-3 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <path
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      <svg v-if="internalQuery || (props.multiple && selectedItems.length > 0)" @click="clearSelection"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="currentColor"
        class="w-3 h-3 absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
        <path
          d="M242.72 256l100.07-100.07c12.5-12.5 12.5-32.76 0-45.26l-22.63-22.63c-12.5-12.5-32.76-12.5-45.26 0L175.12 188.1 75.05 88.03c-12.5-12.5-32.76-12.5-45.26 0L7.16 110.66c-12.5 12.5-12.5 32.76 0 45.26L107.23 256 7.16 356.07c-12.5 12.5-12.5 32.76 0 45.26l22.63 22.63c12.5 12.5 32.76 12.5 45.26 0L175.12 323.9l100.07 100.07c12.5 12.5 32.76 12.5 45.26 0l22.63-22.63c12.5-12.5 12.5-32.76 0-45.26L242.72 256z" />
      </svg>
    </div>
    <div v-if="props.multiple && selectedItems.length > 0" class="flex flex-wrap gap-1 p-2 min-h-[42px]">
      <span v-for="item in selectedItems" :key="item.value"
        class="inline-flex items-center gap-1 px-2 py-1 bg-green-50 border-green-500 border text-green-800 dark:bg-green-900 dark:text-green-100 rounded-2xl text-sm">
        {{ item.name }}
        <svg @click="removeItem(item)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="currentColor"
          class="w-3 h-3 cursor-pointer hover:text-red-600">
          <path
            d="M242.72 256l100.07-100.07c12.5-12.5 12.5-32.76 0-45.26l-22.63-22.63c-12.5-12.5-32.76-12.5-45.26 0L175.12 188.1 75.05 88.03c-12.5-12.5-32.76-12.5-45.26 0L7.16 110.66c-12.5 12.5-12.5 32.76 0 45.26L107.23 256 7.16 356.07c-12.5 12.5-12.5 32.76 0 45.26l22.63 22.63c12.5 12.5 32.76 12.5 45.26 0L175.12 323.9l100.07 100.07c12.5 12.5 32.76 12.5 45.26 0l22.63-22.63c12.5-12.5 12.5-32.76 0-45.26L242.72 256z" />
        </svg>
      </span>
    </div>
    <p v-if="props.validation && props.validation.$error">
      <FwbInputErrorMessage :messages="props.validation.$errors" />
    </p>
    <p v-if="props.validation && props.errors">
      <slot name="validationMessage" />
    </p>
    <ul v-if="showOptions && filteredList.length" @keyup.esc="closeFocus"
      class="absolute p-2 origin-top-right right-0 mt-2 w-full rounded-md shadow-lg bg-gray-100 dark:bg-gray-600 ring-1 ring-black ring-opacity-5 z-[1000]">
      <li v-for="item in filteredList.slice(0, 10)" :key="item.value" @click="selectItem(item)"
        class="p-2 block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:text-gray-200 cursor-pointer font-medium timbul">
        <div class="flex items-center justify-between">
          <span>{{ item.name }}</span>
          <svg v-if="props.multiple && isItemSelected(item)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            fill="currentColor" class="w-4 h-4 text-green-600">
            <path
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'
import FwbInputErrorMessage from './VTInputErrorMessage.vue'
import type { SelectOption } from '.'

const props = withDefaults(
  defineProps<{
    modelValue?: any
    sources: Array<SelectOption>
    placeholder?: string
    validationStatus?: boolean
    label?: string
    validation?: any
    errors?: any
    disabled?: boolean
    multiple?: boolean
  }>(),
  { placeholder: 'Cari . . .', multiple: false }
)

const internalQuery = ref('')
const filteredList = ref<SelectOption[]>([])
const emit = defineEmits(['update:modelValue', 'change', 'search'])
const query = useVModel(props, 'modelValue', emit)
const showOptions = ref(false)
const dropdown = ref<HTMLElement | null>(null)

// Computed property for selected items (for multi-select)
const selectedItems = computed<SelectOption[]>(() => {
  if (!props.multiple) {
    return []
  }
  const values = Array.isArray(query.value) ? query.value : []
  if (!values || values.length === 0) {
    return []
  }
  return values
    .map((val: any) => {
      if (val === null || val === undefined) return undefined
      return props.sources.find((item) => item.value === val)
    })
    .filter((item: SelectOption | undefined): item is SelectOption => item !== undefined)
})

onMounted(() => {
  if (props.modelValue) {
    if (props.multiple && Array.isArray(props.modelValue)) {
      // Multi-select: set internal query to show count of selected items
      const selectedCount = props.modelValue.length
      internalQuery.value = selectedCount > 0 ? `${selectedCount} item(s) selected` : ''
    } else {
      // Single-select: set internal query to selected item name
      var data = props.sources.find((x) => x.value == props.modelValue)
      if (data) {
        internalQuery.value = data.name
      }
    }
  }
})

watch(query, (newValue: any, oldValue: any) => {
  // Handle multi-select
  if (props.multiple) {
    if (Array.isArray(newValue) && newValue.length >= 0) {
      internalQuery.value = newValue.length > 0 ? `${newValue.length} item(s) selected` : ''
    }
    return
  }

  // Handle single-select - only update internalQuery, don't call selectItem
  if (newValue !== undefined && newValue !== null) {
    var data = props.sources.find((x) => x.value == newValue)
    if (data && internalQuery.value !== data.name) {
      internalQuery.value = data.name
    }
  } else if (newValue === null || newValue === undefined) {
    // Handle clear selection
    internalQuery.value = ''
  }
})

const filterList = () => {
  const searchQuery = internalQuery.value?.toLowerCase()
  emit('search', searchQuery)
  filteredList.value = props.sources.filter((item) => item.name?.toLowerCase().includes(searchQuery))
  showOptions.value = true
}

const onClickDropdown = () => {
  showOptions.value = !showOptions.value
  const searchQuery = internalQuery.value?.toLowerCase()
  if (searchQuery) {
    filteredList.value = props.sources.filter((item) => item.name?.toLowerCase().includes(searchQuery))
  } else {
    filteredList.value = [...props.sources]
  }
}

const onFocus = () => {
  showOptions.value = true
  if (props.multiple) {
    // For multi-select, don't clear the model value
    internalQuery.value = ''
    emit('search', '')
  } else {
    emit('update:modelValue', null)
    emit('change', null)
  }
  const searchQuery = internalQuery.value?.toLowerCase()
  if (searchQuery && searchQuery.length) {
    filteredList.value = props.sources.filter((item) => item.name?.toLowerCase().includes(searchQuery))
  } else {
    filteredList.value = [...props.sources]
  }
}

const closeFocus = () => (showOptions.value = false)

const selectItem = (item: SelectOption) => {
  if (item) {
    if (props.multiple) {
      // Multi-select mode
      const currentValues = Array.isArray(query.value) ? query.value : []
      if (!currentValues.includes(item.value)) {
        const newValues = [...currentValues, item.value]
        query.value = newValues
        emit('update:modelValue', newValues)
        emit('change', newValues.map((val: any) => props.sources.find((s) => s.value === val)).filter(Boolean))
      }
      internalQuery.value = ''
      filteredList.value = [...props.sources]
      // Keep dropdown open for multi-select to allow more selections
      showOptions.value = true
    } else {
      // Single-select mode
      internalQuery.value = item.name
      query.value = item.value
      filteredList.value = [...props.sources]
      emit('update:modelValue', item.value)
      emit('change', item)
      // Close dropdown for single-select
      showOptions.value = false
    }
  }
}

const removeItem = (item: SelectOption) => {
  if (props.multiple) {
    const currentValues = Array.isArray(query.value) ? query.value : []
    const newValues = currentValues.filter((val: any) => val !== item.value)
    // Force create a new array to trigger reactivity
    query.value = [...newValues]
    emit('update:modelValue', [...newValues])
    emit('change', newValues.map((val: any) => props.sources.find((s) => s.value === val)).filter(Boolean))
    // Update internal query to reflect new count
    internalQuery.value = newValues.length > 0 ? `${newValues.length} item(s) selected` : ''
    // Force update filteredList to ensure reactivity
    filteredList.value = [...props.sources]
  }
}

const isItemSelected = (item: SelectOption): boolean => {
  if (!props.multiple) return false
  const currentValues = Array.isArray(query.value) ? query.value : []
  return currentValues.includes(item.value)
}

const clearSelection = () => {
  if (props.multiple) {
    internalQuery.value = ''
    query.value = []
    emit('update:modelValue', [])
    emit('change', [])
    filteredList.value = [...props.sources]
    showOptions.value = true
  } else {
    internalQuery.value = ''
    filteredList.value = [...props.sources]
    query.value = null
    emit('update:modelValue', null)
    emit('change', null)
    showOptions.value = true
  }
}

// Close option when click outside VTAutocomplete component area
const handleClickOutside = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    closeFocus()
  }
}

// Add/remove click outside listener based on showOptions state
watch(showOptions, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

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
    const vsx = props.validation.$error || props.errors
    classByStatus = vsx ? errorInputClasses : successInputClasses
  }

  return twMerge(defaultInputClasses, classByStatus, props.disabled ? disabledInputClasses : '')
})

const labelClasses = computed(() => {
  let classByStatus = 'text-gray-900 dark:text-white'
  if (props.validation) {
    const vsx = props.validation.$error || props.errors
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
