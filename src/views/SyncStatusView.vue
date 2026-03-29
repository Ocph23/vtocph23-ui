<template>
    <MainLayout>
        <VTPageTitle title="Sync Status" subtitle="This is sync status view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Sync Status"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTSyncStatus 
    :column="'sudah sync'" 
    :date="'2024-03-29 10:30:00'" 
/&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 10:30:00'" />
            <VTSyncStatus :column="'belum sync'" :date="'-'" />
        </div>

        <VTPageTitle :size="'sm'" title="Synced Status" subtitle="Successfully Synced"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTSyncStatus 
    :column="'sudah sync'" 
    :date="'2024-03-29 10:30:00'" 
/&gt;

// Shows: Green badge with checkmark icon</code>
        </pre>
        <div class="my-5">
            <VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 10:30:00'" />
            <p class="mt-2 text-sm text-gray-600">Green badge with double checkmark icon</p>
        </div>

        <VTPageTitle :size="'sm'" title="Not Synced Status" subtitle="Not Yet Synced"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTSyncStatus 
    :column="'belum sync'" 
    :date="'-'" 
/&gt;

// Shows: Amber/Yellow badge with clock icon</code>
        </pre>
        <div class="my-5">
            <VTSyncStatus :column="'belum sync'" :date="'-'" />
            <p class="mt-2 text-sm text-gray-600">Amber badge with clock icon</p>
        </div>

        <VTPageTitle :size="'sm'" title="With Tooltip" subtitle="Sync Status with Tooltip"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTSyncStatus 
    :column="'sudah sync'" 
    :date="'2024-03-29 10:30:00'" 
/&gt;

// Hover over the badge to see the timestamp in a tooltip</code>
        </pre>
        <div class="my-5">
            <div class="flex gap-4">
                <div>
                    <VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 10:30:00'" />
                    <p class="text-xs mt-1 text-gray-500">Hover to see timestamp</p>
                </div>
                <div>
                    <VTSyncStatus :column="'belum sync'" :date="'Last attempt: 2024-03-29 09:00:00'" />
                    <p class="text-xs mt-1 text-gray-500">Hover to see details</p>
                </div>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="In Table" subtitle="Sync Status in Table Context"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Data Item&lt;/td&gt;
        &lt;td&gt;
            &lt;VTSyncStatus 
                :column="'sudah sync'" 
                :date="'2024-03-29 10:30:00'" 
            /&gt;
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
                            <th class="py-2 px-4 border-b text-left">Data Name</th>
                            <th class="py-2 px-4 border-b text-left">Last Update</th>
                            <th class="py-2 px-4 border-b text-center">Sync Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">1</td>
                            <td class="py-2 px-4 border-b">Customer Data</td>
                            <td class="py-2 px-4 border-b">2024-03-29 10:30:00</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center">
                                    <VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 10:30:00'" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">2</td>
                            <td class="py-2 px-4 border-b">Product Inventory</td>
                            <td class="py-2 px-4 border-b">2024-03-29 09:15:00</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center">
                                    <VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 09:15:00'" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">3</td>
                            <td class="py-2 px-4 border-b">Order Records</td>
                            <td class="py-2 px-4 border-b">-</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center">
                                    <VTSyncStatus :column="'belum sync'" :date="'Pending sync'" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">4</td>
                            <td class="py-2 px-4 border-b">Transaction Log</td>
                            <td class="py-2 px-4 border-b">-</td>
                            <td class="py-2 px-4 border-b">
                                <div class="flex justify-center">
                                    <VTSyncStatus :column="'belum sync'" :date="'Queued for sync'" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="Status Comparison" subtitle="Sync Status Side by Side"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Synced (Green)
&lt;VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 10:30:00'" /&gt;

// Not Synced (Amber)
&lt;VTSyncStatus :column="'belum sync'" :date="'-'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard title="Sync Status Types">
                <div class="grid grid-cols-2 gap-6">
                    <div class="border rounded p-4">
                        <h4 class="font-semibold mb-3 text-green-700 dark:text-green-500">Synced (Sudah Sync)</h4>
                        <div class="flex items-center gap-3">
                            <VTSyncStatus :column="'sudah sync'" :date="'2024-03-29 10:30:00'" />
                            <div>
                                <p class="text-sm font-medium">Green background</p>
                                <p class="text-xs text-gray-500">Double checkmark icon</p>
                                <p class="text-xs text-gray-500">Shows "sudah sync" text</p>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded p-4">
                        <h4 class="font-semibold mb-3 text-amber-700 dark:text-amber-500">Not Synced (Belum Sync)</h4>
                        <div class="flex items-center gap-3">
                            <VTSyncStatus :column="'belum sync'" :date="'-'" />
                            <div>
                                <p class="text-sm font-medium">Amber/Yellow background</p>
                                <p class="text-xs text-gray-500">Clock icon</p>
                                <p class="text-xs text-gray-500">Shows "belum sync" text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Sync Status Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTSyncStatusProps {
    column?: string;      // 'sudah sync' | 'belum sync'
    date?: string;        // Timestamp or description
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Sync Status Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Uses VTToolTip component internally
// Supports tooltip slots:
- trigger: The status badge element
- content: Tooltip content (shows date)
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Visual Design" subtitle="Status Badge Design"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Synced Badge:
- Background: bg-green-500 (dark: bg-green-600)
- Icon: Double checkmark (IconDoubleCheck)
- Text: "sudah sync"
- Width: w-32

// Not Synced Badge:
- Background: bg-amber-500
- Icon: Clock (IconTime)
- Text: "belum sync"
- Width: w-32
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Usage Example" subtitle="Complete Example"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto"><code v-text="usageExampleCode"></code></pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTSyncStatus from '@/components/VTSyncStatus.vue';
import VTCard from '@/components/VTCard.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const usageExampleCode = `<template>
    <VTCard title="Data Sync Status">
        <table>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.name }}</td>
                <td>
                    <VTSyncStatus 
                        :column="item.synced ? 'sudah sync' : 'belum sync'" 
                        :date="item.lastSyncDate" 
                    />
                </td>
            </tr>
        </table>
    </VTCard>
</template>

<script setup lang="ts">
import VTSyncStatus from '@/components/VTSyncStatus.vue';

const items = [
    { id: 1, name: 'Data 1', synced: true, lastSyncDate: '2024-03-29 10:30:00' },
    { id: 2, name: 'Data 2', synced: false, lastSyncDate: '-' }
];
<\/script>`;
</script>

<style lang="scss" scoped></style>
