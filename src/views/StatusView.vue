<template>
    <MainLayout>
        <VTPageTitle title="Status" subtitle="This is status view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Status Badges"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTStatus :type="'success'" :text="'Active'" /&gt;
&lt;VTStatus :type="'danger'" :text="'Inactive'" /&gt;
&lt;VTStatus :type="'warning'" :text="'Pending'" /&gt;
&lt;VTStatus :type="'info'" :text="'Review'" /&gt;</code>
        </pre>
        <div class="my-5 flex gap-3 flex-wrap">
            <VTStatus :type="'success'" :text="'Success'" />
            <VTStatus :type="'danger'" :text="'Danger'" />
            <VTStatus :type="'warning'" :text="'Warning'" />
            <VTStatus :type="'info'" :text="'Info'" />
        </div>

        <VTPageTitle :size="'sm'" title="With Icons" subtitle="Status with Custom Icons"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTStatus :type="'success'" :text="'Completed'"&gt;
    &lt;template #icon&gt;
        &lt;svg&gt;...&lt;/svg&gt;
    &lt;/template&gt;
&lt;/VTStatus&gt;</code>
        </pre>
        <div class="my-5 flex gap-3 flex-wrap">
            <VTStatus :type="'success'" :text="'Completed'">
                <template #icon>
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </template>
            </VTStatus>
            <VTStatus :type="'danger'" :text="'Failed'">
                <template #icon>
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clip-rule="evenodd" />
                    </svg>
                </template>
            </VTStatus>
            <VTStatus :type="'warning'" :text="'Warning'">
                <template #icon>
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                </template>
            </VTStatus>
            <VTStatus :type="'info'" :text="'Info'">
                <template #icon>
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd" />
                    </svg>
                </template>
            </VTStatus>
        </div>

        <VTPageTitle :size="'sm'" title="With Tooltip" subtitle="Status with Tooltip"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTStatus 
    :type="'success'" 
    :text="'Active'" 
    :tooltip="'This item is currently active and visible to users'" 
/&gt;</code>
        </pre>
        <div class="my-5 flex gap-3 flex-wrap">
            <VTStatus :type="'success'" :text="'Active'" :tooltip="'This item is currently active and visible to users'" />
            <VTStatus :type="'danger'" :text="'Inactive'" :tooltip="'This item has been deactivated and is hidden'" />
            <VTStatus :type="'warning'" :text="'Pending'" :tooltip="'Waiting for approval from administrator'" />
            <VTStatus :type="'info'" :text="'Review'" :tooltip="'This item is under review'" />
        </div>

        <VTPageTitle :size="'sm'" title="With Custom Text Slot" subtitle="Status with Custom Text Slot"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTStatus :type="'success'"&gt;
    &lt;template #text&gt;
        &lt;span class="font-bold"&gt;Custom Text&lt;/span&gt;
    &lt;/template&gt;
&lt;/VTStatus&gt;</code>
        </pre>
        <div class="my-5 flex gap-3 flex-wrap">
            <VTStatus :type="'success'">
                <template #text>
                    <span class="font-bold">Published</span>
                </template>
            </VTStatus>
            <VTStatus :type="'danger'">
                <template #text>
                    <span class="italic">Archived</span>
                </template>
            </VTStatus>
            <VTStatus :type="'warning'">
                <template #text>
                    <span class="underline">Draft</span>
                </template>
            </VTStatus>
        </div>

        <VTPageTitle :size="'sm'" title="In Table" subtitle="Status in Table Context"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Order #001&lt;/td&gt;
        &lt;td&gt;&lt;VTStatus :type="'success'" :text="'Completed'" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code>
        </pre>
        <div class="my-5">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="py-2 px-4 border-b text-left">Order</th>
                            <th class="py-2 px-4 border-b text-left">Customer</th>
                            <th class="py-2 px-4 border-b text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">#001</td>
                            <td class="py-2 px-4 border-b">John Doe</td>
                            <td class="py-2 px-4 border-b"><VTStatus :type="'success'" :text="'Completed'" /></td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">#002</td>
                            <td class="py-2 px-4 border-b">Jane Smith</td>
                            <td class="py-2 px-4 border-b"><VTStatus :type="'warning'" :text="'Pending'" /></td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">#003</td>
                            <td class="py-2 px-4 border-b">Bob Wilson</td>
                            <td class="py-2 px-4 border-b"><VTStatus :type="'danger'" :text="'Cancelled'" /></td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">#004</td>
                            <td class="py-2 px-4 border-b">Alice Brown</td>
                            <td class="py-2 px-4 border-b"><VTStatus :type="'info'" :text="'Processing'" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Status Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTStatusProps {
    text?: string;
    type: 'success' | 'danger' | 'warning' | 'info';
    tooltip?: string;
    class?: string;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Status Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- icon: Custom icon slot
- text: Custom text content slot
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Color Mapping" subtitle="Status Type to Color"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
success  → Green (bg-green-500)
danger   → Red (bg-red-500)
warning  → Amber/Yellow (bg-amber-500)
info     → Blue (bg-blue-500)
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTStatus from '@/components/VTStatus.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
</script>

<style lang="scss" scoped></style>
