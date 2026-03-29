<template>
    <MainLayout>
        <VTPageTitle title="Toast" subtitle="This is toast view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Toast Notifications"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
import { VTToastService } from '@/components/VTToast';

VTToastService.success('Operation successful!');
VTToastService.error('Something went wrong!');
VTToastService.warning('Warning message!');
VTToastService.info('Information message!');</code>
        </pre>
        <div class="my-5 flex gap-2 flex-wrap">
            <VTButton color="green" @click="showSuccess">Success Toast</VTButton>
            <VTButton color="red" @click="showError">Error Toast</VTButton>
            <VTButton color="yellow" @click="showWarning">Warning Toast</VTButton>
            <VTButton color="blue" @click="showInfo">Info Toast</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Closable Toast" subtitle="Toast with Close Button"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>VTToastService.success('Message', 5000, true); // closable = true</code>
        </pre>
        <div class="my-5">
            <VTButton color="green" @click="showClosableSuccess">Closable Success Toast</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Auto-dismiss" subtitle="Toast with Auto-dismiss"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Auto-dismiss after 3 seconds
VTToastService.success('Message', 3000);</code>
        </pre>
        <div class="my-5">
            <VTButton color="green" @click="showAutoDismiss">Auto-dismiss (3s)</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Toast Types" subtitle="Available Toast Types"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
type ToastType = 'success' | 'warning' | 'danger' | 'empty'

// Success - Green with checkmark icon
// Warning - Yellow with exclamation icon
// Danger - Red with X icon
// Empty - No icon (for info messages)</code>
        </pre>
        <div class="my-5 grid grid-cols-2 gap-4">
            <div class="border rounded p-4">
                <h4 class="font-semibold mb-2">Success</h4>
                <VTButton color="green" size="sm" @click="showType('success')">Show Success</VTButton>
            </div>
            <div class="border rounded p-4">
                <h4 class="font-semibold mb-2">Warning</h4>
                <VTButton color="yellow" size="sm" @click="showType('warning')">Show Warning</VTButton>
            </div>
            <div class="border rounded p-4">
                <h4 class="font-semibold mb-2">Danger</h4>
                <VTButton color="red" size="sm" @click="showType('danger')">Show Danger</VTButton>
            </div>
            <div class="border rounded p-4">
                <h4 class="font-semibold mb-2">Info (Empty)</h4>
                <VTButton color="blue" size="sm" @click="showType('empty')">Show Info</VTButton>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="Service Methods" subtitle="VTToastService API"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
VTToastService.success(message: string, duration?: number, closable?: boolean, divide?: boolean)
VTToastService.error(message: string, duration?: number, closable?: boolean, divide?: boolean)
VTToastService.warning(message: string, duration?: number, closable?: boolean, divide?: boolean)
VTToastService.info(message: string, duration?: number, closable?: boolean, divide?: boolean)
VTToastService.showToast(message: string, type: string, duration?: number, closable?: boolean, divide: boolean)</code>
        </pre>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Toast Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTToastProps {
    type?: 'success' | 'warning' | 'danger' | 'empty';
    alignment?: 'start' | 'center' | 'end';
    closable?: boolean;
    divide?: boolean;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Toast Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- default: Toast message content
- icon: Custom icon slot
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Events" subtitle="Toast Events"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>@close - Emitted when toast is closed</code>
        </pre>

        <VTPageTitle :size="'sm'" title="Usage Example" subtitle="Complete Example"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;script setup lang="ts"&gt;
import { VTToastService } from '@/components/VTToast';

const handleSubmit = () => {
    try {
        // Your logic here
        VTToastService.success('Data saved successfully!');
    } catch (error) {
        VTToastService.error('Failed to save data!');
    }
}
&lt;/script&gt;</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
import { VTToastService } from '@/components/VTToast';

const showSuccess = () => {
    VTToastService.success('Operation completed successfully!', 5000, true, true);
};

const showError = () => {
    VTToastService.error('An error occurred! Please try again.', 5000, true, true);
};

const showWarning = () => {
    VTToastService.warning('Warning: Please check your input.', 5000, true, true);
};

const showInfo = () => {
    VTToastService.info('This is an informational message.', 5000, true, true);
};

const showClosableSuccess = () => {
    VTToastService.success('You can close this toast manually!', 0, true, true);
};

const showAutoDismiss = () => {
    VTToastService.success('This will disappear in 3 seconds...', 3000, false, true);
};

const showType = (type: string) => {
    const messages: Record<string, string> = {
        success: 'Success! Your action was completed.',
        warning: 'Warning! Please review before continuing.',
        danger: 'Error! Something went wrong.',
        empty: 'Here is some information for you.'
    };
    VTToastService.showToast(messages[type], type, 5000, true, true);
};
</script>

<style lang="scss" scoped></style>
