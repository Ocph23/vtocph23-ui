<template>
    <MainLayout>
        <VTPageTitle title="Button Action" subtitle="This is button action view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Button Action"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTButtonAction :type="'detail'" /&gt;
&lt;VTButtonAction :type="'edit'" /&gt;
&lt;VTButtonAction :type="'delete'" /&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTButtonAction :type="'detail'" />
            <VTButtonAction :type="'edit'" />
            <VTButtonAction :type="'delete'" />
        </div>

        <VTPageTitle :size="'sm'" title="With URL" subtitle="Button Action with Link"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTButtonAction 
    :type="'detail'" 
    :url="'/users/123'" 
/&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTButtonAction :type="'detail'" :url="'#'" />
            <VTButtonAction :type="'edit'" :url="'#'" />
            <VTButtonAction :type="'delete'" :url="'#'" />
        </div>

        <VTPageTitle :size="'sm'" title="Styles" subtitle="Button Action Styles"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTButtonAction :type="'detail'" :style="'default'" /&gt;
&lt;VTButtonAction :type="'edit'" :style="'success'" /&gt;
&lt;VTButtonAction :type="'delete'" :style="'danger'" /&gt;
&lt;VTButtonAction :type="'detail'" :style="'warning'" /&gt;
&lt;VTButtonAction :type="'detail'" :style="'info'" /&gt;</code>
        </pre>
        <div class="my-5 flex gap-4 flex-wrap">
            <div class="text-center">
                <VTButtonAction :type="'detail'" :style="'default'" />
                <p class="text-xs mt-1">Default</p>
            </div>
            <div class="text-center">
                <VTButtonAction :type="'detail'" :style="'success'" />
                <p class="text-xs mt-1">Success</p>
            </div>
            <div class="text-center">
                <VTButtonAction :type="'detail'" :style="'danger'" />
                <p class="text-xs mt-1">Danger</p>
            </div>
            <div class="text-center">
                <VTButtonAction :type="'detail'" :style="'warning'" />
                <p class="text-xs mt-1">Warning</p>
            </div>
            <div class="text-center">
                <VTButtonAction :type="'detail'" :style="'info'" />
                <p class="text-xs mt-1">Info</p>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="With Click Event" subtitle="Button Action with Click Handler"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTButtonAction 
    :type="'detail'" 
    :data="{ id: 123 }" 
    @click="handleClick" 
/&gt;

&lt;script setup&gt;
const handleClick = (data) => {
    console.log('Clicked with data:', data);
}
&lt;/script&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTButtonAction :type="'detail'" :data="{ id: 1, name: 'Item 1' }" @click="handleClick" />
            <VTButtonAction :type="'edit'" :data="{ id: 2, name: 'Item 2' }" @click="handleClick" />
            <VTButtonAction :type="'delete'" :data="{ id: 3, name: 'Item 3' }" @click="handleClick" />
        </div>
        <VTCard v-if="lastClick">
            <p class="text-sm">Last click: {{ lastClick }}</p>
        </VTCard>

        <VTPageTitle :size="'sm'" title="In Table" subtitle="Button Action in Table Context"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Item Name&lt;/td&gt;
        &lt;td&gt;
            &lt;VTButtonAction :type="'detail'" :url="'/items/1'" /&gt;
            &lt;VTButtonAction :type="'edit'" :url="'/items/1/edit'" /&gt;
            &lt;VTButtonAction :type="'delete'" @click="deleteItem" /&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code>
        </pre>
        <div class="my-5">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="py-2 px-4 border-b text-left">ID</th>
                            <th class="py-2 px-4 border-b text-left">Name</th>
                            <th class="py-2 px-4 border-b text-left">Email</th>
                            <th class="py-2 px-4 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">1</td>
                            <td class="py-2 px-4 border-b">John Doe</td>
                            <td class="py-2 px-4 border-b">john@example.com</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center gap-2">
                                    <VTButtonAction :type="'detail'" :data="{ id: 1 }" @click="handleAction" />
                                    <VTButtonAction :type="'edit'" :data="{ id: 1 }" @click="handleAction" />
                                    <VTButtonAction :type="'delete'" :style="'danger'" :data="{ id: 1 }" @click="handleAction" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">2</td>
                            <td class="py-2 px-4 border-b">Jane Smith</td>
                            <td class="py-2 px-4 border-b">jane@example.com</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center gap-2">
                                    <VTButtonAction :type="'detail'" :data="{ id: 2 }" @click="handleAction" />
                                    <VTButtonAction :type="'edit'" :data="{ id: 2 }" @click="handleAction" />
                                    <VTButtonAction :type="'delete'" :style="'danger'" :data="{ id: 2 }" @click="handleAction" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">3</td>
                            <td class="py-2 px-4 border-b">Bob Wilson</td>
                            <td class="py-2 px-4 border-b">bob@example.com</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center gap-2">
                                    <VTButtonAction :type="'detail'" :data="{ id: 3 }" @click="handleAction" />
                                    <VTButtonAction :type="'edit'" :data="{ id: 3 }" @click="handleAction" />
                                    <VTButtonAction :type="'delete'" :style="'danger'" :data="{ id: 3 }" @click="handleAction" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="With Custom Content" subtitle="Button Action with Custom Slot"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTButtonAction :url="'#'"&gt;
    &lt;span&gt;Custom Icon&lt;/span&gt;
&lt;/VTButtonAction&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTButtonAction :url="'#'">
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    View
                </span>
            </VTButtonAction>
            <VTButtonAction :url="'#'">
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit
                </span>
            </VTButtonAction>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Button Action Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTButtonActionProps {
    url?: string;
    data?: any;
    style?: 'success' | 'danger' | 'warning' | 'default' | 'info';
    type?: 'delete' | 'edit' | 'detail' | 'default';
    class?: string;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Events" subtitle="Button Action Events"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>@click - Emitted when button is clicked, passes data prop</code>
        </pre>

        <VTPageTitle :size="'sm'" title="Style Mapping" subtitle="Style to Color Mapping"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
default  → Blue (bg-blue-500)
success  → Teal/Green (bg-teal-500)
danger   → Red (bg-red-500)
warning  → Amber/Yellow (bg-amber-500)
info     → Blue (bg-blue-500)
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Icons" subtitle="Default Icons by Type"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
detail  → Eye/View icon
edit    → Pencil/Edit icon
delete  → Trash/Delete icon
default → Detail icon (fallback)
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTButtonAction from '@/components/VTButtonAction.vue';
import VTCard from '@/components/VTCard.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const lastClick = ref('');

const handleClick = (data: any) => {
    lastClick.value = `Clicked: ${JSON.stringify(data)}`;
};

const handleAction = (data: any) => {
    console.log('Action clicked:', data);
    lastClick.value = `Action: ${JSON.stringify(data)}`;
};
</script>

<style lang="scss" scoped></style>
