<template>
    <MainLayout>
        <VTPageTitle title="Card" subtitle="This is card view"></VTPageTitle>
        
        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Card"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTCard&gt;Card Content&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard>
                <p>This is a basic card component.</p>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="With Title" subtitle="Card with Title"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTCard title="Card Title"&gt;Card Content&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard title="Card Title">
                <p>This card has a title section.</p>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="With Right Side Slot" subtitle="Card with Right Side Content"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTCard title="Card Title"&gt;
    &lt;template #rightSide&gt;
        &lt;VTButton color="blue"&gt;Action&lt;/VTButton&gt;
    &lt;/template&gt;
    Card Content
&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard title="Card Title">
                <template #rightSide>
                    <VTButton color="blue" size="sm">Action</VTButton>
                </template>
                <p>This card has content on the right side of the title.</p>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="With Footer" subtitle="Card with Footer"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTCard title="Card Title"&gt;
    Card Content
    &lt;template #footerSide&gt;
        &lt;VTButton color="blue"&gt;Save&lt;/VTButton&gt;
    &lt;/template&gt;
&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard title="Card Title">
                <p>This card has a footer section.</p>
                <template #footerSide>
                    <VTButton color="blue" size="sm">Save</VTButton>
                    <VTButton color="alternative" size="sm" class="ml-2">Cancel</VTButton>
                </template>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Custom Class" subtitle="Card with Custom Styling"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTCard :cardClass="'custom-class'"&gt;Card Content&lt;/VTCard&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard :cardClass="'bg-blue-50 border-blue-200 dark:bg-gray-800 dark:border-gray-700'">
                <p>This card has custom styling applied.</p>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Card Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTCardProps {
    title?: string
    cardClass?: string
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Card Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- default: Main card content
- rightSide: Content on the right side of the title
- footerSide: Content in the footer section
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
</script>

<style lang="scss" scoped></style>
