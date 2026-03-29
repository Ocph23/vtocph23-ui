<template>
    <MainLayout>
        <VTPageTitle title="Tabs" subtitle="This is tabs view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Tabs"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTTabs v-model="activeTab"&gt;
    &lt;VTTabPane name="tab1" title="Tab 1"&gt;
        Content 1
    &lt;/VTTabPane&gt;
    &lt;VTTabPane name="tab2" title="Tab 2"&gt;
        Content 2
    &lt;/VTTabPane&gt;
&lt;/VTTabs&gt;</code>
        </pre>
        <div class="my-5">
            <VTTabs v-model="activeTab">
                <VTTabPane name="tab1" title="Tab 1">
                    <p class="p-4">This is the content of Tab 1.</p>
                </VTTabPane>
                <VTTabPane name="tab2" title="Tab 2">
                    <p class="p-4">This is the content of Tab 2.</p>
                </VTTabPane>
                <VTTabPane name="tab3" title="Tab 3">
                    <p class="p-4">This is the content of Tab 3.</p>
                </VTTabPane>
            </VTTabs>
            <p class="mt-2 text-sm text-gray-600">Active Tab: {{ activeTab }}</p>
        </div>

        <VTPageTitle :size="'sm'" title="Disabled Tab" subtitle="Tabs with Disabled State"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTTabPane name="tab2" title="Tab 2" :disabled="true"&gt;
    Content 2
&lt;/VTTabPane&gt;</code>
        </pre>
        <div class="my-5">
            <VTTabs v-model="activeTab2">
                <VTTabPane name="tab1" title="Tab 1">
                    <p class="p-4">This is the content of Tab 1.</p>
                </VTTabPane>
                <VTTabPane name="tab2" title="Tab 2" :disabled="true">
                    <p class="p-4">This tab is disabled.</p>
                </VTTabPane>
                <VTTabPane name="tab3" title="Tab 3">
                    <p class="p-4">This is the content of Tab 3.</p>
                </VTTabPane>
            </VTTabs>
        </div>

        <VTPageTitle :size="'sm'" title="With Icon" subtitle="Tabs with Icons"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTTabPane name="tab1" title="Tab 1"&gt;
    &lt;template #icon&gt;
        &lt;svg&gt;...&lt;/svg&gt;
    &lt;/template&gt;
    Content 1
&lt;/VTTabPane&gt;</code>
        </pre>
        <div class="my-5">
            <VTTabs v-model="activeTab3">
                <VTTabPane name="tab1" title="Profile">
                    <template #icon>
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </template>
                    <p class="p-4">Profile content.</p>
                </VTTabPane>
                <VTTabPane name="tab2" title="Settings">
                    <template #icon>
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                    </template>
                    <p class="p-4">Settings content.</p>
                </VTTabPane>
            </VTTabs>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Tabs Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTTabsProps {
    variant?: 'default' | 'pills' | 'underline'
    modelValue?: string
    directive?: 'if' | 'show'
}

interface VTTabPaneProps {
    name: string;
    title: string;
    disabled?: boolean;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Events" subtitle="Tabs Events"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
@update:modelValue - Emitted when tab changes
@click:pane - Emitted when a tab is clicked
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTTabs from '@/components/VTTabs/VTTabs.vue';
import VTTabPane from '@/components/VTTabs/VTTabPane.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const activeTab = ref('tab1');
const activeTab2 = ref('tab1');
const activeTab3 = ref('tab1');
</script>

<style lang="scss" scoped></style>
