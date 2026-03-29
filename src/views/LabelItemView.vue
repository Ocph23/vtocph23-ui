<template>
    <MainLayout>
        <VTPageTitle title="Label Item" subtitle="This is label item view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Label Item"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTLabelItem 
    :labelText="'First Name'" 
    :value="'John'" 
/&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTLabelItem :labelText="'First Name'" :value="'John'" />
            <VTLabelItem :labelText="'Last Name'" :value="'Doe'" />
            <VTLabelItem :labelText="'Email'" :value="'john.doe@example.com'" />
        </div>

        <VTPageTitle :size="'sm'" title="With Long Text" subtitle="Label Item with Long Values"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTLabelItem 
    :labelText="'Address'" 
    :value="'123 Main Street, Apartment 4B, New York, NY 10001'" 
/&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTLabelItem :labelText="'Address'" :value="'123 Main Street, Apartment 4B, New York, NY 10001'" />
        </div>

        <VTPageTitle :size="'sm'" title="With Dynamic Data" subtitle="Label Item with Reactive Data"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTLabelItem 
    :labelText="'Status'" 
    :value="userStatus" 
/&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTLabelItem :labelText="'Current Status'" :value="dynamicStatus" />
            <VTButton class="mt-2" color="blue" size="sm" @click="toggleStatus">Toggle Status</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="In Card" subtitle="Label Items in Card Layout"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTCard title="User Information"&gt;
    &lt;VTLabelItem :labelText="'Name'" :value="'John Doe'" /&gt;
    &lt;VTLabelItem :labelText="'Email'" :value="'john@example.com'" /&gt;
    &lt;VTLabelItem :labelText="'Phone'" :value="'+1 234 567 890'" /&gt;
&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTCard title="User Information">
                <VTLabelItem :labelText="'Name'" :value="'John Doe'" />
                <VTLabelItem :labelText="'Email'" :value="'john@example.com'" />
                <VTLabelItem :labelText="'Phone'" :value="'+1 234 567 890'" />
                <VTLabelItem :labelText="'Department'" :value="'Engineering'" />
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Label Item Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTLabelItemProps {
    labelText: string;
    value: string;
    labelType?: 'row' | 'col';
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Features" subtitle="Label Item Features"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- Responsive layout (row on desktop, column on mobile)
- Automatic colon separator on desktop
- Dark mode support
- Capitalized label text
- Consistent styling
- Ideal for detail views and forms
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Usage Example" subtitle="Complete Example"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;template&gt;
    &lt;VTCard title="Employee Details"&gt;
        &lt;VTLabelItem :labelText="'Employee ID'" :value="employee.id" /&gt;
        &lt;VTLabelItem :labelText="'Full Name'" :value="employee.name" /&gt;
        &lt;VTLabelItem :labelText="'Position'" :value="employee.position" /&gt;
        &lt;VTLabelItem :labelText="'Department'" :value="employee.department" /&gt;
        &lt;VTLabelItem :labelText="'Hire Date'" :value="employee.hireDate" /&gt;
    &lt;/VTCard&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import VTLabelItem from '@/components/VTLabelItem.vue';
import VTCard from '@/components/VTCard.vue';

const employee = {
    id: 'EMP001',
    name: 'Jane Smith',
    position: 'Senior Developer',
    department: 'Engineering',
    hireDate: '2023-01-15'
};
&lt;/script&gt;</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import VTLabelItem from '@/components/VTLabelItem.vue';
import VTCard from '@/components/VTCard.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const statusOptions = ['Active', 'Inactive', 'Pending'];
const currentStatusIndex = ref(0);

const dynamicStatus = computed(() => statusOptions[currentStatusIndex.value]);

const toggleStatus = () => {
    currentStatusIndex.value = (currentStatusIndex.value + 1) % statusOptions.length;
};
</script>

<style lang="scss" scoped></style>
