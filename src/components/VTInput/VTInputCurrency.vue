<template>
    <div>
        <label v-if="label" :class="[labelClasses]">{{ label }}<span v-if="props.validation"
                class="text-orange-500">*</span></label>
        <div class="flex relative">
            <div v-if="$slots.prefix"
                class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden">
                <slot name="prefix" />
            </div>
            <input v-bind="$attrs" :value="formattedValue" @input="onInput" @blur="formatToCurrency"
                @focus="removeFormatting" :disabled="disabled" :type="type" :required="required"
                :class="[inputClasses, $slots.prefix ? 'pl-10' : '']">
            <div v-if="$slots.suffix" class="absolute right-2.5 bottom-2.5">
                <slot name="suffix" />
            </div>
        </div>
        <p v-if="props.validation && props.validation.$error">
            <FwbInputErrorMessage :messages="props.validation.$errors" />
        </p>

    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { twMerge } from 'tailwind-merge'
import { defineProps, withDefaults } from 'vue'
import {
    type InputSize,
    type InputType,
} from './types'

interface InputProps {
    disabled?: boolean
    label?: string
    modelValue: string
    required?: boolean
    size?: InputSize
    type?: InputType
    validation?: any
}

const props = withDefaults(defineProps<InputProps>(), {
    disabled: false,
    label: '',
    modelValue: '0',
    required: false,
    size: 'md',
    type: 'text',
})

//const model = useVModel(props, 'modelValue')



const getNumber = (value: string) => {
    let onlyDigitsAndCommas = value.replace(/[^\d,]/g, '');  // Remove all non-digit characters except commas
    let withoutPeriods = onlyDigitsAndCommas.replace(/\./g, '');  // Remove periods
    return withoutPeriods.replace(/,/g, '.');  // Replace commas with periods
}


const onInput = (event: any) => {
    const value = event.target.value; // Remove non-numeric characters
    tempValue.value = value;
    rawValue.value = getNumber(value);
    emit('update:modelValue', rawValue.value);
};

const formatToCurrency = () => {
    tempValue.value = formatCurrency(rawValue.value);
    rawValue.value = getNumber(tempValue.value);
    emit('update:modelValue', rawValue.value);
};

const removeFormatting = () => {
    // eslint-disable-next-line no-self-assign
    tempValue.value = tempValue.value;
};

const formatCurrency = (value: any) => {
    if (value === null || value === undefined || value === '') return '';
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
};
const rawValue = ref(props.modelValue);
const tempValue = ref();
tempValue.value = formatCurrency(rawValue.value);


const formattedValue = computed(() => tempValue.value);

const emit = defineEmits(['update:modelValue']);


watch(() => props.modelValue, (newValue) => {
    rawValue.value = newValue;
});

// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
const defaultInputClasses =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const disabledInputClasses = 'cursor-not-allowed bg-gray-100'
const inputSizeClasses: Record<InputSize, string> = {
    lg: 'p-4',
    md: 'p-2.5 text-sm',
    sm: 'p-2 text-sm',
}

const successInputClasses = 'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorInputClasses = 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

const inputClasses = computed(() => {
    let classByStatus = defaultInputClasses;
    if (props.validation) {
        const vsx = props.validation.$error;
        classByStatus = vsx
            ? errorInputClasses
            : successInputClasses
    }

    return twMerge(
        defaultInputClasses,
        classByStatus,
        inputSizeClasses[props.size],
        props.disabled ? disabledInputClasses : '',
    )
})

const labelClasses = computed(() => {
    let classByStatus = 'text-gray-900 dark:text-white';
    if (props.validation) {
        const vsx = props.validation.$error;
        classByStatus = vsx
            ? 'text-red-700 dark:text-red-500'
            : 'text-green-700 dark:text-green-500'
    }

    return twMerge(baseLabelClasses, classByStatus)
})

</script>