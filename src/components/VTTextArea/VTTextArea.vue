<template>
    <label>
        <span :class="labelClasses">{{ label }}<span v-if="props.validation" class="text-orange-500">*</span></span>
        <span :class="wrapperClasses">
            <textarea v-model="model" v-bind="$attrs" :class="textAreaClasses" :rows="rows"
                :placeholder="placeholder" />
            <p v-if="props.validation && props.errors">
                <slot name="validationMessage" />
            </p>
            <span v-if="$slots.footer" :class="footerClasses">
                <slot name="footer" />
            </span>
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { simplifyTailwindClasses } from '../simplyTailwindClass';

interface TextareaProps {
    modelValue?: string
    label?: string
    rows?: number
    custom?: boolean
    placeholder?: string
    validation?: any,
    disabled?: boolean,
    errors?: any,
}

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<TextareaProps>(), {
    modelValue: '',
    label: 'Your message',
    rows: 4,
    custom: false,
    placeholder: 'Write your message here...',
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    },
})




// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
// const defaultClasses = 'w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
const disabledClasses = 'cursor-not-allowed bg-gray-100'

const successClasses = 'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorClasses = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

const textareaWrapperClasses = 'block w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'
const textareaFooterClasses = 'block py-2 px-3 border-gray-200 dark:border-gray-600'
const textareaDefaultClasses = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

const textAreaClasses = computed(() => {
    let classByStatus = textareaDefaultClasses;
    if (props.validation) {
        const vsx = props.validation.$error || props.errors;;
        classByStatus = vsx
            ? errorClasses
            : successClasses
    }

    return twMerge(
        textareaDefaultClasses,
        classByStatus,
        props.disabled ? disabledClasses : '',
    )
})

const labelClasses = computed(() => {
    let classByStatus = 'text-gray-900 dark:text-white';
    if (props.validation) {
        const vsx = props.validation.$error || props.errors;;
        classByStatus = vsx
            ? 'text-red-700 dark:text-red-500'
            : 'text-green-700 dark:text-green-500'
    }

    return twMerge(baseLabelClasses, classByStatus)
})

const wrapperClasses = computed(() => (props.custom) ? textareaWrapperClasses : '')
const footerClasses = computed(() => textareaFooterClasses)


</script>