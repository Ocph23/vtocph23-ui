<template>
    <MainLayout>
        <VTPageTitle title="Wrap Text" subtitle="This is wrap text view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Wrap Text"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTWrapText&gt;
    Long text content that will wrap automatically
&lt;/VTWrapText&gt;</code>
        </pre>
        <div class="my-5">
            <VTWrapText>
                This is a long text that will automatically wrap to the next line when it reaches the edge of its container. 
                The text-wrap CSS property is used to control how the text wraps within its container.
            </VTWrapText>
        </div>

        <VTPageTitle :size="'sm'" title="In Narrow Container" subtitle="Wrap Text in Constrained Width"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;div class="w-64"&gt;
    &lt;VTWrapText&gt;Long text here...&lt;/VTWrapText&gt;
&lt;/div&gt;</code>
        </pre>
        <div class="my-5">
            <div class="w-64 border border-gray-300 p-4 rounded">
                <VTWrapText>
                    This text is constrained to a narrow container and will wrap multiple times to fit within the available space.
                </VTWrapText>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="With Dynamic Content" subtitle="Wrap Text with Reactive Data"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTWrapText&gt;{{ dynamicText }}&lt;/VTWrapText&gt;</code>
        </pre>
        <div class="my-5">
            <div class="border border-gray-300 p-4 rounded">
                <VTWrapText>
                    {{ dynamicText }}
                </VTWrapText>
            </div>
            <VTButton class="mt-2" color="blue" size="sm" @click="toggleText">Toggle Text Length</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="In Card" subtitle="Wrap Text in Card Component"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTCard title="Description"&gt;
    &lt;VTWrapText&gt;
        Your long description text here...
    &lt;/VTWrapText&gt;
&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5 max-w-lg">
            <VTCard title="Product Description">
                <VTWrapText>
                    This is a detailed product description that contains multiple sentences explaining the features, 
                    benefits, and specifications of the product. The text will automatically wrap to fit within 
                    the card's width, ensuring readability on all screen sizes.
                </VTWrapText>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Wrap Text Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// VTWrapText has no props - it's a simple wrapper component
// Uses CSS class: text-wrap
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Wrap Text Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- default: Text content to be wrapped
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Usage Example" subtitle="Complete Example"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;template&gt;
    &lt;VTCard title="Article"&gt;
        &lt;VTWrapText&gt;
            {{ dynamicText }}
        &lt;/VTWrapText&gt;
    &lt;/VTCard&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import VTWrapText from '@/components/VTWrapText.vue';
import VTCard from '@/components/VTCard.vue';

const dynamicText = 'Long article content here...';
&lt;/script&gt;</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTWrapText from '@/components/VTWrapText.vue';
import VTCard from '@/components/VTCard.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const shortText = 'Short text.';
const longText = 'This is a much longer text that will demonstrate the text wrapping functionality. It contains multiple sentences and will wrap several times within its container, showing how the component handles extended content gracefully.';

const dynamicText = ref(longText);

const toggleText = () => {
    dynamicText.value = dynamicText.value === longText ? shortText : longText;
};
</script>

<style lang="scss" scoped></style>
