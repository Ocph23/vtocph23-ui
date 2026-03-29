<template>
    <MainLayout>
        <VTPageTitle title="Accordion" subtitle="This is accordion view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Accordion"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTAccordion&gt;
    &lt;VTAccordionPanel&gt;
        &lt;VTAccordionHeader&gt;Item 1&lt;/VTAccordionHeader&gt;
        &lt;VTAccordionContent&gt;
            Content 1
        &lt;/VTAccordionContent&gt;
    &lt;/VTAccordionPanel&gt;
&lt;/VTAccordion&gt;</code>
        </pre>
        <div class="my-5 max-w-2xl">
            <VTAccordion>
                <VTAccordionPanel>
                    <VTAccordionHeader>Accordion Item 1</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">This is the content for accordion item 1. You can put any content here.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
                <VTAccordionPanel>
                    <VTAccordionHeader>Accordion Item 2</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">This is the content for accordion item 2. It can be longer or shorter.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
                <VTAccordionPanel>
                    <VTAccordionHeader>Accordion Item 3</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">This is the content for accordion item 3.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
            </VTAccordion>
        </div>

        <VTPageTitle :size="'sm'" title="Always Open" subtitle="Accordion with Multiple Open Panels"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTAccordion :alwaysOpen="true"&gt;...&lt;/VTAccordion&gt;</code>
        </pre>
        <div class="my-5 max-w-2xl">
            <VTAccordion :alwaysOpen="true">
                <VTAccordionPanel>
                    <VTAccordionHeader>Always Open - Item 1</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">This panel can stay open with others when alwaysOpen is true.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
                <VTAccordionPanel>
                    <VTAccordionHeader>Always Open - Item 2</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">Click on other panels - this one will stay open.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
                <VTAccordionPanel>
                    <VTAccordionHeader>Always Open - Item 3</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">Multiple panels can be open simultaneously.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
            </VTAccordion>
        </div>

        <VTPageTitle :size="'sm'" title="First Item Closed" subtitle="Accordion with All Items Closed Initially"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTAccordion :openFirstItem="false"&gt;...&lt;/VTAccordion&gt;</code>
        </pre>
        <div class="my-5 max-w-2xl">
            <VTAccordion :openFirstItem="false">
                <VTAccordionPanel>
                    <VTAccordionHeader>Start Closed - Item 1</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">All items start closed when openFirstItem is false.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
                <VTAccordionPanel>
                    <VTAccordionHeader>Start Closed - Item 2</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">Click any item to open it.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
            </VTAccordion>
        </div>

        <VTPageTitle :size="'sm'" title="Flush Style" subtitle="Flush Accordion (No Borders)"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTAccordion :flush="true"&gt;...&lt;/VTAccordion&gt;</code>
        </pre>
        <div class="my-5 max-w-2xl">
            <VTAccordion :flush="true">
                <VTAccordionPanel>
                    <VTAccordionHeader>Flush Style - Item 1</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">This accordion has no borders (flush style).</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
                <VTAccordionPanel>
                    <VTAccordionHeader>Flush Style - Item 2</VTAccordionHeader>
                    <VTAccordionContent>
                        <p class="p-4">Clean look without borders.</p>
                    </VTAccordionContent>
                </VTAccordionPanel>
            </VTAccordion>
        </div>

        <VTPageTitle :size="'sm'" title="Rich Content" subtitle="Accordion with Rich Content"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTAccordion&gt;
    &lt;VTAccordionPanel&gt;
        &lt;VTAccordionHeader&gt;
            &lt;div class="flex items-center"&gt;
                &lt;Icon /&gt;
                &lt;span&gt;Title with Icon&lt;/span&gt;
            &lt;/div&gt;
        &lt;/VTAccordionHeader&gt;
        &lt;VTAccordionContent&gt;
            &lt;p&gt;Content with &lt;strong&gt;HTML&lt;/strong&gt;&lt;/p&gt;
        &lt;/VTAccordionContent&gt;
    &lt;/VTAccordionPanel&gt;
&lt;/VTAccordion&gt;</code>
        </pre>
        <div class="my-5 max-w-2xl">
            <VTAccordion>
                <VTAccordionPanel>
                    <VTAccordionHeader>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Information</span>
                        </div>
                    </VTAccordionHeader>
                    <VTAccordionContent>
                        <div class="p-4">
                            <p class="mb-2">This accordion item has an icon in the header.</p>
                            <ul class="list-disc list-inside">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </div>
                    </VTAccordionContent>
                </VTAccordionPanel>
            </VTAccordion>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Accordion Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTAccordionProps {
    alwaysOpen?: boolean;
    openFirstItem?: boolean;
    flush?: boolean;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Components" subtitle="Accordion Components"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- VTAccordion: Main container component
- VTAccordionPanel: Individual accordion item wrapper
- VTAccordionHeader: Clickable header section
- VTAccordionContent: Expandable content section
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTAccordion from '@/components/VTAccordion/VTAccordion.vue';
import VTAccordionPanel from '@/components/VTAccordion/VTAccordionPanel.vue';
import VTAccordionHeader from '@/components/VTAccordion/VTAccordionHeader.vue';
import VTAccordionContent from '@/components/VTAccordion/VTAccordionContent.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
</script>

<style lang="scss" scoped></style>
