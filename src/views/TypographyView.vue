<template>
    <MainLayout>
        <VTPageTitle title="Typography" subtitle="This is typography view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Heading" subtitle="Heading Components"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTHeading :tag="'h1'"&gt;Heading 1&lt;/VTHeading&gt;
&lt;VTHeading :tag="'h2'"&gt;Heading 2&lt;/VTHeading&gt;
&lt;VTHeading :tag="'h3'"&gt;Heading 3&lt;/VTHeading&gt;
&lt;VTHeading :tag="'h4'"&gt;Heading 4&lt;/VTHeading&gt;
&lt;VTHeading :tag="'h5'"&gt;Heading 5&lt;/VTHeading&gt;
&lt;VTHeading :tag="'h6'"&gt;Heading 6&lt;/VTHeading&gt;</code>
        </pre>
        <div class="my-5 space-y-2">
            <VTHeading :tag="'h1'">Heading 1 - H1</VTHeading>
            <VTHeading :tag="'h2'">Heading 2 - H2</VTHeading>
            <VTHeading :tag="'h3'">Heading 3 - H3</VTHeading>
            <VTHeading :tag="'h4'">Heading 4 - H4</VTHeading>
            <VTHeading :tag="'h5'">Heading 5 - H5</VTHeading>
            <VTHeading :tag="'h6'">Heading 6 - H6</VTHeading>
        </div>

        <VTPageTitle :size="'sm'" title="Heading Colors" subtitle="Heading with Custom Colors"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTHeading :tag="'h2'" :color="'text-blue-600'"&gt;Colored Heading&lt;/VTHeading&gt;</code>
        </pre>
        <div class="my-5 space-y-2">
            <VTHeading :tag="'h2'" :color="'text-blue-600 dark:text-blue-500'">Blue Heading</VTHeading>
            <VTHeading :tag="'h3'" :color="'text-green-600 dark:text-green-500'">Green Heading</VTHeading>
            <VTHeading :tag="'h4'" :color="'text-red-600 dark:text-red-500'">Red Heading</VTHeading>
            <VTHeading :tag="'h5'" :color="'text-purple-600 dark:text-purple-500'">Purple Heading</VTHeading>
        </div>

        <VTPageTitle :size="'sm'" title="Heading Custom Size" subtitle="Heading with Custom Size"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTHeading :tag="'h3'" :customSize="'text-5xl font-black'"&gt;Custom Size&lt;/VTHeading&gt;</code>
        </pre>
        <div class="my-5">
            <VTHeading :tag="'h3'" :customSize="'text-5xl font-black'">Extra Large H3</VTHeading>
            <VTHeading :tag="'h1'" :customSize="'text-sm font-normal'">Small H1</VTHeading>
        </div>

        <VTPageTitle :size="'sm'" title="Link" subtitle="Link Component"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTA :href="'https://example.com'"&gt;Click Here&lt;/VTA&gt;</code>
        </pre>
        <div class="my-5">
            <p class="mb-2">
                This is a paragraph with a <VTA :href="'#'" :color="'text-blue-600 dark:text-blue-500'">default link</VTA> in it.
            </p>
            <p class="mb-2">
                <VTA :href="'#'" :color="'text-green-600 dark:text-green-500'">Green Link</VTA> - Custom color
            </p>
            <p class="mb-2">
                <VTA :href="'#'" :color="'text-red-600 dark:text-red-500'">Red Link</VTA> - Another color
            </p>
            <p>
                <VTA :href="'#'" :color="'text-purple-600 dark:text-purple-500'">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                    </svg>
                    Link with Icon
                </VTA>
            </p>
        </div>

        <VTPageTitle :size="'sm'" title="Image" subtitle="Image Component"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTImg :src="'image.jpg'" :alt="'Description'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTImg :src="'https://via.placeholder.com/400x200'" :alt="'Placeholder Image'" />
        </div>

        <VTPageTitle :size="'sm'" title="Image with Caption" subtitle="Image with Caption"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTImg 
    :src="'image.jpg'" 
    :alt="'Description'" 
    :caption="'Image caption text'" 
/&gt;</code>
        </pre>
        <div class="my-5">
            <VTImg 
                :src="'https://via.placeholder.com/400x200'" 
                :alt="'Placeholder with Caption'" 
                :caption="'This is a sample image caption'" 
            />
        </div>

        <VTPageTitle :size="'sm'" title="Image Sizes" subtitle="Different Image Sizes"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTImg :size="'max-w-xs'" :src="'...'" /&gt;
&lt;VTImg :size="'max-w-sm'" :src="'...'" /&gt;
&lt;VTImg :size="'max-w-md'" :src="'...'" /&gt;
&lt;VTImg :size="'max-w-lg'" :src="'...'" /&gt;</code>
        </pre>
        <div class="my-5 space-y-4">
            <div>
                <p class="mb-2 text-sm text-gray-600">Small (max-w-xs)</p>
                <VTImg :size="'max-w-xs'" :src="'https://via.placeholder.com/400x200'" :alt="'Small'" />
            </div>
            <div>
                <p class="mb-2 text-sm text-gray-600">Medium (max-w-sm)</p>
                <VTImg :size="'max-w-sm'" :src="'https://via.placeholder.com/400x200'" :alt="'Medium'" />
            </div>
            <div>
                <p class="mb-2 text-sm text-gray-600">Large (max-w-md)</p>
                <VTImg :size="'max-w-md'" :src="'https://via.placeholder.com/400x200'" :alt="'Large'" />
            </div>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Typography Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// VTHeading
interface VTHeadingProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: string;
    customSize?: string;
}

// VTA (Link)
interface VTAProps {
    href?: string;
    color?: string;
}

// VTImg (Image)
interface VTImgProps {
    caption?: string;
    src?: string;
    size?: string;
    alt?: string;
    imgClass?: string;
    alignment?: string;
    captionClass?: string;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Default Styles" subtitle="Default Typography Styles"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Heading Sizes
h1: text-5xl font-extrabold
h2: text-4xl font-bold
h3: text-3xl font-bold
h4: text-2xl font-bold
h5: text-xl font-bold
h6: text-lg font-bold

// Default Colors
Heading: text-gray-900 dark:text-white
Link: text-primary-600 dark:text-primary-500
Image Caption: text-sm text-center text-gray-500 dark:text-gray-400
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTHeading from '@/components/VTTypography/VTHeading.vue';
import VTA from '@/components/VTTypography/VTA.vue';
import VTImg from '@/components/VTTypography/VTImg.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
</script>

<style lang="scss" scoped></style>
