<template>
    <MainLayout>
        <VTPageTitle subtitle="" size="lg" :title="'VTTooltip'"></VTPageTitle>
        <div class="flex gap-4">
            <VTToolTip placement="top" trigger="hover">
                <template #trigger>
                    <button class="bg-red-500 text-white px-4 py-2 rounded">Top</button>
                </template>
                <template #content>
                    This is a tooltip content!
                </template>
            </VTToolTip>
            <VTToolTip :placement="'bottom'" trigger="hover">
                <template #trigger>
                    <button class=" bg-yellow-400 text-white px-4 py-2 rounded">Bottom</button>
                </template>
                <template #content>
                    This is a tooltip content!
                </template>
            </VTToolTip>
            <VTToolTip :placement="'right'" theme="dark" trigger="hover">
                <template #trigger>
                    <button class="bg-red-500 text-white px-4 py-2 rounded">Hover me</button>
                </template>
                <template #content>
                    This is a tooltip content!
                </template>
            </VTToolTip>
        </div>
        <CodeComponent title="Contoh Penggunaan VTToolTip">
            <pre><code>
            &lt;VTToolTip placement="top" trigger="hover"&gt;
            &lt;template #trigger&gt;
            &lt;button class="bg-red-500 text-white px-4 py-2 rounded"&gt;Top&lt;/button&gt;
            &lt;/template&gt;
            &lt;template #content&gt;
            This is a tooltip content!
            &lt;/template&gt;
            &lt;/VTToolTip&gt;
        </code></pre>

        </CodeComponent>

        <CodeComponent>
            <pre><code>
            interface TooltipProps {
            placement?: TooltipPlacement
            theme?: TooltipStyle
            trigger?: TooltipTrigger
            disabled?: boolean
            }
        </code></pre>

        </CodeComponent>

        <CodeComponent title="type Definitions">
            <pre><code>
            type TooltipPlacement = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom'
            |
            'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' |
            'left-end';
            type TooltipStyle = 'dark' | 'light';
            type TooltipTrigger = 'hover' | 'click';
        </code>
    </pre>
        </CodeComponent>

    </MainLayout>
</template>

<script setup lang="ts">
import VTToolTip from '@/components/VTToolTip.vue';
import MainLayout from './MainLayout.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import CodeComponent from './components/CodeComponent.vue';


</script>

<style scoped></style>