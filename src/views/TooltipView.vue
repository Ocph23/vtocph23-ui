<template>
    <MainLayout>
        <VTPageTitle title="Tooltip" subtitle="This is tooltip view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Tooltip"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTToolTip&gt;
    &lt;template #trigger&gt;
        &lt;VTButton&gt;Hover Me&lt;/VTButton&gt;
    &lt;/template&gt;
    &lt;template #content&gt;
        Tooltip content here
    &lt;/template&gt;
&lt;/VTToolTip&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTToolTip>
                <template #trigger>
                    <VTButton color="blue">Hover Me</VTButton>
                </template>
                <template #content>
                    This is a tooltip!
                </template>
            </VTToolTip>
        </div>

        <VTPageTitle :size="'sm'" title="Placement" subtitle="Tooltip Placements"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTToolTip :placement="'top'"&gt;...&lt;/VTToolTip&gt;
&lt;VTToolTip :placement="'bottom'"&gt;...&lt;/VTToolTip&gt;
&lt;VTToolTip :placement="'left'"&gt;...&lt;/VTToolTip&gt;
&lt;VTToolTip :placement="'right'"&gt;...&lt;/VTToolTip&gt;</code>
        </pre>
        <div class="my-5 flex flex-wrap gap-4">
            <VTToolTip :placement="'top'">
                <template #trigger>
                    <VTButton color="blue" size="sm">Top</VTButton>
                </template>
                <template #content>Tooltip on top</template>
            </VTToolTip>
            <VTToolTip :placement="'bottom'">
                <template #trigger>
                    <VTButton color="green" size="sm">Bottom</VTButton>
                </template>
                <template #content>Tooltip on bottom</template>
            </VTToolTip>
            <VTToolTip :placement="'left'">
                <template #trigger>
                    <VTButton color="yellow" size="sm">Left</VTButton>
                </template>
                <template #content>Tooltip on left</template>
            </VTToolTip>
            <VTToolTip :placement="'right'">
                <template #trigger>
                    <VTButton color="red" size="sm">Right</VTButton>
                </template>
                <template #content>Tooltip on right</template>
            </VTToolTip>
        </div>

        <VTPageTitle :size="'sm'" title="Trigger" subtitle="Tooltip Trigger Modes"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTToolTip :trigger="'hover'"&gt;...&lt;/VTToolTip&gt;
&lt;VTToolTip :trigger="'click'"&gt;...&lt;/VTToolTip&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTToolTip :trigger="'hover'">
                <template #trigger>
                    <VTButton color="blue">Hover Trigger</VTButton>
                </template>
                <template #content>Shows on hover</template>
            </VTToolTip>
            <VTToolTip :trigger="'click'">
                <template #trigger>
                    <VTButton color="green">Click Trigger</VTButton>
                </template>
                <template #content>Shows on click</template>
            </VTToolTip>
        </div>

        <VTPageTitle :size="'sm'" title="Themes" subtitle="Tooltip Themes"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTToolTip :theme="'light'"&gt;...&lt;/VTToolTip&gt;
&lt;VTToolTip :theme="'dark'"&gt;...&lt;/VTToolTip&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTToolTip :theme="'light'">
                <template #trigger>
                    <VTButton color="blue">Light Theme</VTButton>
                </template>
                <template #content>
                    <div class="p-2">
                        <p class="font-semibold">Light Tooltip</p>
                        <p class="text-sm">With light background</p>
                    </div>
                </template>
            </VTToolTip>
            <VTToolTip :theme="'dark'">
                <template #trigger>
                    <VTButton color="green">Dark Theme</VTButton>
                </template>
                <template #content>
                    <div class="p-2">
                        <p class="font-semibold">Dark Tooltip</p>
                        <p class="text-sm">With dark background</p>
                    </div>
                </template>
            </VTToolTip>
        </div>

        <VTPageTitle :size="'sm'" title="Rich Content" subtitle="Tooltip with HTML Content"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTToolTip&gt;
    &lt;template #trigger&gt;
        &lt;VTButton&gt;Info&lt;/VTButton&gt;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;div class="p-2"&gt;
            &lt;h4 class="font-bold"&gt;Title&lt;/h4&gt;
            &lt;p&gt;Description&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/VTToolTip&gt;</code>
        </pre>
        <div class="my-5 flex gap-4">
            <VTToolTip>
                <template #trigger>
                    <VTButton color="purple">Rich Content</VTButton>
                </template>
                <template #content>
                    <div class="p-3">
                        <h4 class="font-bold mb-2">Tooltip Title</h4>
                        <p class="text-sm mb-2">This tooltip contains rich HTML content including:</p>
                        <ul class="list-disc list-inside text-sm">
                            <li>Headings</li>
                            <li>Paragraphs</li>
                            <li>Lists</li>
                        </ul>
                    </div>
                </template>
            </VTToolTip>
            <VTToolTip>
                <template #trigger>
                    <VTButton color="yellow">With Icon</VTButton>
                </template>
                <template #content>
                    <div class="p-2 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                        <span>Information with icon</span>
                    </div>
                </template>
            </VTToolTip>
        </div>

        <VTPageTitle :size="'sm'" title="Disabled" subtitle="Disabled Tooltip"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTToolTip :disabled="true"&gt;...&lt;/VTToolTip&gt;</code>
        </pre>
        <div class="my-5">
            <VTToolTip :disabled="true">
                <template #trigger>
                    <VTButton color="alternative">Disabled Tooltip</VTButton>
                </template>
                <template #content>This tooltip is disabled</template>
            </VTToolTip>
        </div>

        <VTPageTitle :size="'sm'" title="In Table" subtitle="Tooltip in Table Context"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;
            &lt;VTToolTip&gt;
                &lt;template #trigger&gt;Info&lt;/template&gt;
                &lt;template #content&gt;Details&lt;/template&gt;
            &lt;/VTToolTip&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code>
        </pre>
        <div class="my-5">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="py-2 px-4 border-b text-left">Product</th>
                            <th class="py-2 px-4 border-b text-left">Price</th>
                            <th class="py-2 px-4 border-b text-left">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">Product A</td>
                            <td class="py-2 px-4 border-b">$10.00</td>
                            <td class="py-2 px-4 border-b">
                                <VTToolTip :placement="'top'">
                                    <template #trigger>
                                        <button class="text-blue-600 hover:underline">ℹ️ Details</button>
                                    </template>
                                    <template #content>
                                        <div class="p-2">
                                            <p class="font-semibold">Product A</p>
                                            <p class="text-sm">High quality product with warranty</p>
                                        </div>
                                    </template>
                                </VTToolTip>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">Product B</td>
                            <td class="py-2 px-4 border-b">$25.00</td>
                            <td class="py-2 px-4 border-b">
                                <VTToolTip :placement="'top'">
                                    <template #trigger>
                                        <button class="text-blue-600 hover:underline">ℹ️ Details</button>
                                    </template>
                                    <template #content>
                                        <div class="p-2">
                                            <p class="font-semibold">Product B</p>
                                            <p class="text-sm">Premium product with free shipping</p>
                                        </div>
                                    </template>
                                </VTToolTip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Tooltip Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTToolTipProps {
    placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right' | ...;
    theme?: 'light' | 'dark';
    trigger?: 'hover' | 'click';
    disabled?: boolean;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Tooltip Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- trigger: The element that triggers the tooltip
- content: The tooltip content to display
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Placement Options" subtitle="All Available Placements"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
type TooltipPlacement = 
    | 'auto' | 'auto-start' | 'auto-end'
    | 'top' | 'top-start' | 'top-end'
    | 'bottom' | 'bottom-start' | 'bottom-end'
    | 'right' | 'right-start' | 'right-end'
    | 'left' | 'left-start' | 'left-end'
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTToolTip from '@/components/VTToolTip.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
</script>

<style lang="scss" scoped></style>
