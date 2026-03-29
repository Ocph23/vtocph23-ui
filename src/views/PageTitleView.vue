<template>
    <MainLayout>
        <VTPageTitle title="Page Title" subtitle="This is page title view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Page Title"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTPageTitle title="My Page" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTPageTitle title="My Page" />
        </div>

        <VTPageTitle :size="'sm'" title="With Subtitle" subtitle="Page Title with Subtitle"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTPageTitle 
    title="Dashboard" 
    subtitle="Welcome to your dashboard" 
/&gt;</code>
        </pre>
        <div class="my-5">
            <VTPageTitle title="Dashboard" subtitle="Welcome to your dashboard" />
        </div>

        <VTPageTitle :size="'sm'" title="Sizes" subtitle="Page Title Sizes"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTPageTitle :size="'sm'" title="Small" /&gt;
&lt;VTPageTitle :size="'md'" title="Medium" /&gt;
&lt;VTPageTitle :size="'lg'" title="Large" /&gt;</code>
        </pre>
        <div class="my-5 space-y-4">
            <VTPageTitle :size="'sm'" title="Small Title" subtitle="This is a small page title" />
            <VTPageTitle :size="'md'" title="Medium Title" subtitle="This is a medium page title" />
            <VTPageTitle :size="'lg'" title="Large Title" subtitle="This is a large page title" />
        </div>

        <VTPageTitle :size="'sm'" title="In Layout" subtitle="Page Title in Main Layout"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;template&gt;
    &lt;MainLayout&gt;
        &lt;VTPageTitle title="Page Title" subtitle="Description" /&gt;
        
        &lt;!-- Page content here --&gt;
    &lt;/MainLayout&gt;
&lt;/template&gt;</code>
        </pre>
        <div class="my-5">
            <VTCard title="Example Usage">
                <p class="text-gray-600 dark:text-gray-300">
                    The VTPageTitle component is typically used at the top of your page content,
                    right after opening your main layout component. It provides a consistent
                    heading style across all pages in your application.
                </p>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="With Custom Class" subtitle="Page Title with Custom Styling"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTPageTitle 
    title="Custom Styled" 
    :class="'text-center'" 
/&gt;</code>
        </pre>
        <div class="my-5">
            <VTPageTitle title="Custom Styled" subtitle="With custom CSS class" :class="'text-center'" />
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Page Title Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTPageTitleProps {
    title?: string;
    subtitle?: string;
    size?: 'sm' | 'md' | 'lg';
    underline?: boolean;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Size Variants" subtitle="Detailed Size Comparison"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Size affects:
// - Title font size
// - Subtitle font size
// - Overall spacing

sm: text-lg title, text-sm subtitle
md: text-xl title, text-md subtitle  
lg: text-2xl title, text-lg subtitle</code>
        </pre>
        <div class="my-5 border rounded p-4 bg-gray-50 dark:bg-gray-800">
            <div class="space-y-6">
                <div class="border-b pb-4">
                    <p class="text-xs text-gray-500 mb-2">Small (sm)</p>
                    <VTPageTitle :size="'sm'" title="Small Size" subtitle="For secondary pages" />
                </div>
                <div class="border-b pb-4">
                    <p class="text-xs text-gray-500 mb-2">Medium (md)</p>
                    <VTPageTitle :size="'md'" title="Medium Size" subtitle="For standard pages" />
                </div>
                <div>
                    <p class="text-xs text-gray-500 mb-2">Large (lg)</p>
                    <VTPageTitle :size="'lg'" title="Large Size" subtitle="For main pages" />
                </div>
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="Best Practices" subtitle="Usage Guidelines"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// DO: Use consistent size across similar pages
// DO: Keep titles concise and descriptive
// DO: Use subtitle for additional context
// DON'T: Use multiple page titles on one page
// DON'T: Use for section headings (use VTHeading instead)</code>
        </pre>
        <div class="my-5">
            <VTCard title="Usage Tips">
                <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Use <strong class="font-semibold">sm</strong> size for modal headers or secondary pages</li>
                    <li>Use <strong class="font-semibold">md</strong> size for standard content pages</li>
                    <li>Use <strong class="font-semibold">lg</strong> size for main dashboard or landing pages</li>
                    <li>Always include a subtitle when additional context is helpful</li>
                    <li>Keep the title text concise and descriptive</li>
                </ul>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Complete Example" subtitle="Full Page Example"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;template&gt;
    &lt;MainLayout&gt;
        &lt;VTPageTitle 
            :size="'lg'" 
            title="User Management" 
            subtitle="Manage your team members and their permissions" 
        /&gt;
        
        &lt;VTCard&gt;
            &lt;!-- Content here --&gt;
        &lt;/VTCard&gt;
    &lt;/MainLayout&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
import VTCard from '@/components/VTCard.vue';
&lt;/script&gt;</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTPageTitle from '@/components/VTPageTitle.vue';
import VTCard from '@/components/VTCard.vue';
import MainLayout from './MainLayout.vue';
</script>

<style lang="scss" scoped></style>
