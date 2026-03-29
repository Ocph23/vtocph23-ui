<template>
    <MainLayout>
        <VTPageTitle title="Button Save" subtitle="This is button save view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Save Button"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTButtonSave /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButtonSave />
        </div>

        <VTPageTitle :size="'sm'" title="With Title" subtitle="Save Button with Custom Title"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTButtonSave :title="'Save Changes'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButtonSave :title="'Save Changes'" />
        </div>

        <VTPageTitle :size="'sm'" title="Busy State" subtitle="Save Button with Loading State"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTButtonSave :busy="true" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButtonSave :busy="isBusy" :title="'Save'" />
            <VTButton class="ml-4" color="blue" size="sm" @click="simulateSave">Simulate Save</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Disabled State" subtitle="Save Button Disabled"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTButtonSave :disabled="true" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButtonSave :disabled="true" :title="'Save'" />
        </div>

        <VTPageTitle :size="'sm'" title="Success Animation" subtitle="Save Button with Success State"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Automatically shows success animation when busy changes from true to false
&lt;VTButtonSave :busy="isSaving" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButtonSave :busy="isSaving" :title="'Save & Close'" />
            <VTButton class="ml-4" color="green" size="sm" @click="simulateSaveWithSuccess">
                Simulate Save with Success
            </VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Button Save Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTButtonSaveProps {
    busy?: boolean;
    disabled?: boolean;
    title?: string;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Features" subtitle="Button Save Features"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- Shows save icon by default
- Displays loading spinner when busy
- Shows success checkmark animation on completion
- Disabled state with gray styling
- Custom title support (default: "Simpan")
- Automatic state transition from busy to success
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTButtonSave from '@/components/VTButtonSave/VTButtonSave.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const isBusy = ref(false);
const isSaving = ref(false);

const simulateSave = () => {
    isBusy.value = true;
    setTimeout(() => {
        isBusy.value = false;
    }, 2000);
};

const simulateSaveWithSuccess = () => {
    isSaving.value = true;
    setTimeout(() => {
        isSaving.value = false;
    }, 2000);
};
</script>

<style lang="scss" scoped></style>
