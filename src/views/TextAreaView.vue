<template>
    <MainLayout>
        <VTPageTitle title="Text Area" subtitle="This is text area view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Text Area"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea v-model="message" />
            <p class="mt-2 text-sm text-gray-600">Message: {{ message }}</p>
        </div>

        <VTPageTitle :size="'sm'" title="With Label" subtitle="Text Area with Label"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea :label="'Your Message'" v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea :label="'Your Message'" v-model="message2" />
        </div>

        <VTPageTitle :size="'sm'" title="With Placeholder" subtitle="Text Area with Placeholder"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea :placeholder="'Write your message here...'" v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea :placeholder="'Write your custom message...'" v-model="message3" label="With Placeholder" />
        </div>

        <VTPageTitle :size="'sm'" title="Rows" subtitle="Text Area with Custom Rows"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea :rows="6" v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea :rows="6" v-model="message4" label="Tall Text Area" />
        </div>

        <VTPageTitle :size="'sm'" title="Disabled" subtitle="Disabled Text Area"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea :disabled="true" v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea :disabled="true" v-model="messageDisabled" label="Disabled Text Area" />
        </div>

        <VTPageTitle :size="'sm'" title="With Validation" subtitle="Text Area with Validation"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea :validation="true" :errors="errors" v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea :validation="true" :errors="textAreaErrors" v-model="messageError"
                label="Required Text Area" />
        </div>

        <VTPageTitle :size="'sm'" title="Custom Style" subtitle="Text Area with Custom Style"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTTextArea :custom="true" v-model="message" /&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea :custom="true" v-model="messageCustom" label="Custom Styled Text Area" />
        </div>

        <VTPageTitle :size="'sm'" title="With Footer Slot" subtitle="Text Area with Footer"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTTextArea v-model="message"&gt;
    &lt;template #footer&gt;
        &lt;span&gt;Footer content&lt;/span&gt;
    &lt;/template&gt;
&lt;/VTTextArea&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTTextArea v-model="messageFooter" label="With Footer">
                <template #footer>
                    <span class="text-sm text-gray-500">Max 500 characters</span>
                </template>
            </VTTextArea>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Text Area Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTTextAreaProps {
    modelValue?: string;
    label?: string;
    rows?: number;
    custom?: boolean;
    placeholder?: string;
    validation?: any;
    disabled?: boolean;
    errors?: any;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Text Area Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- footer: Content displayed below the textarea
- validationMessage: Custom validation error message
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Events" subtitle="Text Area Events"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>@update:modelValue - Emitted when value changes</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTTextArea from '@/components/VTTextArea/VTTextArea.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const message = ref('');
const message2 = ref('');
const message3 = ref('');
const message4 = ref('');
const messageDisabled = ref('Disabled text');
const messageError = ref('');
const messageCustom = ref('');
const messageFooter = ref('');
const textAreaErrors = ['This field is required'];
</script>

<style lang="scss" scoped></style>
