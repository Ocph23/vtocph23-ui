<template>
    <MainLayout>
        <VTPageTitle title="Select" subtitle="This is select view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Select"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTSelect :options="options" v-model="selected" /&gt;</code>
        </pre>
        <div class="my-5 max-w-sm">
            <VTSelect :options="options" v-model="selected" label="Select Option" />
            <p class="mt-2 text-sm text-gray-600">Selected: {{ selected }}</p>
        </div>

        <VTPageTitle :size="'sm'" title="With Placeholder" subtitle="Select with Placeholder"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTSelect :options="options" :placeholder="'Choose one'" v-model="selected2" /&gt;</code>
        </pre>
        <div class="my-5 max-w-sm">
            <VTSelect :options="options" :placeholder="'Choose one'" v-model="selected2" label="With Placeholder" />
            <p class="mt-2 text-sm text-gray-600">Selected: {{ selected2 }}</p>
        </div>

        <VTPageTitle :size="'sm'" title="Size" subtitle="Select Sizes"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTSelect :size="'sm'" /&gt;
&lt;VTSelect :size="'md'" /&gt;
&lt;VTSelect :size="'lg'" /&gt;</code>
        </pre>
        <div class="my-5 max-w-sm space-y-4">
            <VTSelect :options="options" :size="'sm'" v-model="selectedSm" label="Small Select" />
            <VTSelect :options="options" :size="'md'" v-model="selectedMd" label="Medium Select" />
            <VTSelect :options="options" :size="'lg'" v-model="selectedLg" label="Large Select" />
        </div>

        <VTPageTitle :size="'sm'" title="Disabled" subtitle="Disabled Select"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTSelect :disabled="true" /&gt;</code>
        </pre>
        <div class="my-5 max-w-sm">
            <VTSelect :options="options" :disabled="true" v-model="selectedDisabled" label="Disabled Select" />
        </div>

        <VTPageTitle :size="'sm'" title="With Validation" subtitle="Select with Validation"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTSelect :validation="true" :errors="errors" /&gt;</code>
        </pre>
        <div class="my-5 max-w-sm">
            <VTSelect :options="options" v-model="selectedError" label="Required Select" :validation="true"
                :errors="selectErrors" />
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Select Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTSelectProps {
    modelValue?: any;
    label?: string;
    options?: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    underline?: boolean;
    size?: 'sm' | 'md' | 'lg';
    validation?: any;
    errors?: any;
}

interface SelectOption {
    value: string | number;
    name: string;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Events" subtitle="Select Events"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>@update:modelValue - Emitted when selection changes</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTSelect from '@/components/VTSelect/VTSelect.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const options = [
    { value: 'option1', name: 'Option 1' },
    { value: 'option2', name: 'Option 2' },
    { value: 'option3', name: 'Option 3' },
    { value: 'option4', name: 'Option 4' },
];

const selected = ref('');
const selected2 = ref('');
const selectedSm = ref('');
const selectedMd = ref('');
const selectedLg = ref('');
const selectedDisabled = ref('');
const selectedError = ref('');
const selectErrors = ['This field is required'];
</script>

<style lang="scss" scoped></style>
